#!/usr/bin/env python3
"""Integrity and leak check for a Feed prototype folder.

usage: leak_check.py <prototype-dir> --old "TermA,TermB,..." [--prefix pm-]

Run with `python3 -I` from outside the prototype folder.
Exit 1 on hard problems (leaks, missing assets, broken title lookups, junk files).
Copy-length, em-dash, unused-asset and size findings are warnings and do not fail the run.
"""
import argparse, os, re, sys

TEXT_EXT = {'.html', '.md', '.js', '.json', '.css', '.svg', '.py', '.txt'}
SUB_MIN, SUB_MAX = 165, 220
BIG = 25 * 1024 * 1024


def read(p):
    with open(p, encoding='utf-8', errors='replace') as f:
        return f.read()


def line_of(text, idx):
    return text.count('\n', 0, idx) + 1


def str_values(text, key):
    """Yield (line, value) for key:'...' / key:"..." / key:`...` literals."""
    pat = re.compile(r'\b' + key + r'\s*:\s*(?P<q>[\'"`])(?P<v>(?:\\.|(?!(?P=q)).)*)(?P=q)', re.S)
    for m in pat.finditer(text):
        yield line_of(text, m.start()), m.group('v')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('dir')
    ap.add_argument('--old', default='', help='comma-separated terms from the template brand')
    ap.add_argument('--prefix', default='', help="template's asset prefix, e.g. pm-")
    a = ap.parse_args()

    root = a.dir.rstrip('/')
    idx = os.path.join(root, 'index.html')
    if not os.path.isfile(idx):
        sys.exit(f'no index.html in {root}')
    html = read(idx)
    problems = []

    def bad(kind, msg):
        problems.append((kind, msg))

    # 1. leftover template terms
    terms = [t.strip() for t in a.old.split(',') if t.strip()]
    for rel in ('index.html', 'README.md', 'CHANGELOG.md'):
        p = os.path.join(root, rel)
        if not os.path.isfile(p):
            if rel != 'CHANGELOG.md':
                bad('missing', f'{rel} not found')
            continue
        text = read(p)
        for t in terms:
            for m in re.finditer(re.escape(t), text, re.I):
                ln = line_of(text, m.start())
                snippet = text.splitlines()[ln - 1].strip()[:110]
                bad('leak', f'{rel}:{ln} "{t}" -> {snippet}')
    adir = os.path.join(root, 'assets')
    assets = sorted(os.listdir(adir)) if os.path.isdir(adir) else []
    for f in assets:
        if a.prefix and f.startswith(a.prefix):
            bad('leak', f'assets/{f} keeps the template prefix {a.prefix}')
        for t in terms:
            if t.lower().replace(' ', '-') in f.lower():
                bad('leak', f'assets/{f} contains "{t}"')

    # 2. asset references vs files
    refs = set(re.findall(r'assets/[A-Za-z0-9_\-./ %]+?\.(?:jpg|jpeg|png|svg|webp|gif|mp4|webm|woff2?|ttf)', html))
    for r in sorted(refs):
        if not os.path.isfile(os.path.join(root, r)):
            bad('asset', f'referenced but missing: {r}')
    used = {os.path.basename(r) for r in refs}
    for f in assets:
        if f not in used and not f.startswith('.'):
            bad('unused', f'assets/{f} is never referenced')

    # 3. title-matched lookups
    titles = {v for _, v in str_values(html, 'title')}
    m = re.search(r'const CATALOG = new Set\(\[(.*?)\]\)', html, re.S)
    if m:
        for t in re.findall(r'([\'"`])((?:\\.|(?!\1).)*)\1', m.group(1)):
            if t[1].replace("\\'", "'") not in {x.replace("\\'", "'") for x in titles}:
                bad('title', f'CATALOG entry matches no card title: {t[1][:80]}')
    m = re.search(r'const FEED_CONNECT_AFTER = \{(.*?)\};', html, re.S)
    if m:
        for t in re.findall(r"p\.title === ([\'\"`])((?:\\.|(?!\1).)*)\1", m.group(1)):
            if t[1].replace("\\'", "'") not in {x.replace("\\'", "'") for x in titles}:
                bad('title', f'FEED_CONNECT_AFTER anchors a missing card: {t[1][:80]}')

    # 4. copy rules on post subs inside POSTS / TEXT_POSTS / DECK_ONLY
    for name in ('POSTS', 'TEXT_POSTS', 'DECK_ONLY'):
        m = re.search(r'const ' + name + r' = \[', html)
        if not m:
            continue
        depth, i, start = 0, m.end() - 1, m.end() - 1
        while i < len(html):
            c = html[i]
            if c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    break
            i += 1
        block = html[start:i]
        base = line_of(html, start) - 1
        for key in ('sub', 'title'):
            for ln, v in str_values(block, key):
                if '—' in v:
                    bad('copy', f'{name} {key} line {base + ln}: em dash')
                if key == 'sub' and '${' not in v:
                    n = len(v.replace("\\'", "'"))
                    if n < SUB_MIN or n > SUB_MAX:
                        bad('copy', f'{name} sub line {base + ln}: {n} chars (want {SUB_MIN}-{SUB_MAX})')

    # 5. size
    for dp, _, fs in os.walk(root):
        for f in fs:
            p = os.path.join(dp, f)
            if os.path.getsize(p) > BIG:
                bad('size', f'{os.path.relpath(p, root)} is {os.path.getsize(p) // 1048576} MB')
            if f in ('.DS_Store',) or f.endswith(('.bak', '.zip')):
                bad('junk', f'{os.path.relpath(p, root)} should not ship')

    if not problems:
        print('clean')
        return
    WARN = {'copy', 'unused', 'size'}
    order = ['leak', 'asset', 'title', 'copy', 'unused', 'size', 'junk', 'missing']
    for kind in order:
        rows = [m for k, m in problems if k == kind]
        if rows:
            print(f'\n[{kind}] {len(rows)}' + ('  (warning)' if kind in WARN else ''))
            for r in rows[:60]:
                print('  ' + r)
            if len(rows) > 60:
                print(f'  ... {len(rows) - 60} more')
    if any(k not in WARN for k, _ in problems):
        sys.exit(1)


if __name__ == '__main__':
    main()
