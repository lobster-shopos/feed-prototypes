/* ============================================================
   Pointer: a companion cursor that onboards the ShopOS feed.

   Three ways in, same companion:
   1. Tour    - once the feed lands, Pointer detaches from the logo and
                walks through the feed on its own, drawing on what it
                explains. Move, click or scroll and it steps aside.
   2. Explore - afterwards it follows your cursor and leans in to
                explain whatever you rest on.
   3. Ask/Act - press / and ask where something is ("where do I
                approve?") or tell it what to do ("switch to pro").
                It never presses anything that ships work.

   Choreography only: it reads the real DOM, but every step is scripted.
   ============================================================ */
(() => {
  const FINE = matchMedia('(pointer:fine)').matches;
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const ARROW = (id) => `<svg class="arrow" viewBox="0 0 22 27" aria-hidden="true">
    <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5735FC"/><stop offset=".45" stop-color="#FE49FE"/>
      <stop offset=".75" stop-color="#F2A4F2"/><stop offset="1" stop-color="#F9C391"/></linearGradient></defs>
    <path d="M3 2.5 3 23.1 8.7 17.9 17.2 17.5Z" fill="url(#${id})" stroke="#fff" stroke-width="1.6"
      stroke-linejoin="round" paint-order="stroke"/></svg>`;
  const IC = {
    mic: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><rect x="5.5" y="1.8" width="5" height="8.2" rx="2.5"/><path d="M3.3 7.6a4.7 4.7 0 0 0 9.4 0M8 12.4v2"/></svg>',
    up:  '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 13V3.4M3.8 7.4 8 3.2l4.2 4.2"/></svg>',
    x:   '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 4l8 8M12 4l-8 8"/></svg>'
  };

  // ---------------------------------------------------------------- layer
  const layer = document.createElement('div');
  layer.id = 'pt-layer';
  layer.hidden = true;
  layer.innerHTML = `
    <svg id="pt-marks"><defs><linearGradient id="pt-sg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#5735FC"/><stop offset=".45" stop-color="#FE49FE"/>
      <stop offset=".75" stop-color="#F2A4F2"/><stop offset="1" stop-color="#F9C391"/></linearGradient></defs></svg>
    <div class="pt-ghost" role="status"></div>
    <div class="pt-ripple"></div>
    <div class="pt-card" role="dialog" aria-live="polite">
      <span class="pt-bar"></span>
      <div class="pt-label"><i></i><span></span></div>
      <p class="pt-title"></p>
      <p class="pt-body"><span class="pt-typed"></span><span class="pt-caret"></span></p>
      <div class="pt-row"></div>
    </div>
    <div class="pt-cursor off quiet">${ARROW('pt-ag')}<span class="pt-tag">Pointer</span></div>`;
  document.body.appendChild(layer);
  const marksSvg = $('#pt-marks', layer);
  const cur = $('.pt-cursor', layer);
  const card = $('.pt-card', layer);
  const cardBar = $('.pt-bar', card);
  const cardLabel = $('.pt-label span', card);
  const cardTitle = $('.pt-title', card);
  const cardTyped = $('.pt-typed', card);
  const cardRow = $('.pt-row', card);
  const ripple = $('.pt-ripple', layer);
  const ghost = $('.pt-ghost', layer);

  // ---------------------------------------------------------------- dock
  const dock = document.createElement('div');
  dock.className = 'pt-dock away';
  dock.hidden = true;
  dock.innerHTML = `
    <div class="pt-say"></div>
    <button class="pt-pill" type="button" aria-label="Ask Pointer">
      ${ARROW('pt-ag2')}<span>Ask Pointer</span><span class="pt-kbd">/</span>
      <span class="pt-resume" hidden>Resume tour</span>
    </button>
    <div class="pt-panel" hidden>
      <form class="pt-form" autocomplete="off">
        ${ARROW('pt-ag3')}
        <input class="pt-input" placeholder="Ask where anything is, or tell me what to do" aria-label="Ask Pointer">
        <button class="pt-ic mic" type="button" aria-label="Speak">${IC.mic}</button>
        <button class="pt-ic send" type="submit" aria-label="Send">${IC.up}</button>
      </form>
      <div class="pt-sugs"></div>
      <div class="pt-foot">
        <button type="button" data-pt="tour">Replay the tour</button>
        <span class="sp"></span>
        <button type="button" class="pt-switch" data-pt="explore" aria-pressed="true"><i></i>Explain on hover</button>
        <button type="button" data-pt="close" aria-label="Close">${IC.x}</button>
      </div>
    </div>`;
  document.body.appendChild(dock);
  const pill = $('.pt-pill', dock);
  const panel = $('.pt-panel', dock);
  const input = $('.pt-input', dock);
  const sayEl = $('.pt-say', dock);
  const resumeEl = $('.pt-resume', dock);
  const exploreBtn = $('[data-pt="explore"]', dock);
  const micBtn = $('.pt-ic.mic', dock);

  // ---------------------------------------------------------------- state
  const S = {
    ready: false, brand: 'your brand', host: 'your store',
    mode: 'idle',            // idle | follow | fly | hold
    x: 40, y: 40, vx: 0, vy: 0, tx: 40, ty: 40,
    mx: -1, my: -1, mouseIn: false,
    explore: true,
    hover: null, hoverSince: 0, hoverShown: null,
    hold: null,              // { el, side, card:boolean }
    tour: null,              // { i, token, paused }
    mark: null,              // { el, g, seed, kind, soft }
    arrive: null,
  };

  // ---------------------------------------------------------------- targets
  const firstCard = () => $$('#feed > article.card[data-post]').find(c => !c.classList.contains('is-intro') && c.offsetParent);
  const inFirst = (sel) => () => { const c = firstCard(); return c && $(sel, c); };
  const chatTab = () => $$('.seg .tab')[1];
  const feedTab = () => $$('.seg .tab')[0];
  const AGENT_ABOUT = {
    creative:    'Makes ads, banners and campaign ideas from your brand memory.',
    performance: 'Watches your Meta and Google spend and suggests what to fix.',
    storefront:  'Fixes product pages, copy and your catalog.',
    visibility:  'Checks how ChatGPT and other AI answers talk about you.',
    crm:         'Studies your customers and suggests who to talk to, and when.',
    catalog:     'Keeps your product feed clean on every channel.',
    orchestrator:'Hands work to the right agent and keeps them in sync.'
  };
  const agentOf = (el) => (el.closest('.card') || {}).dataset?.agent;
  const ctaText = (el) => (el.textContent || '').trim().replace(/\s+/g, ' ');
  const visible = (el) => {
    if (!el || !el.isConnected) return false;
    const r = el.getBoundingClientRect();
    return r.width > 2 && r.height > 2 && getComputedStyle(el).visibility !== 'hidden';
  };

  // what Pointer can explain when you rest on something
  const HOVER = [
    { sel: '.card .btn-bar', title: el => ctaText(el), text: () => 'Approves this post. It is the only button that ships anything.' },
    { sel: '.card .act-remix', title: () => 'Remix with the agent', text: () => 'Opens this post with the agent that made it. Nothing runs until you send.' },
    { sel: '.card .act-jam', title: () => 'Jam with team', text: () => 'Brings a person from your ShopOS team onto this exact post.' },
    { sel: '.card .act[data-toast="like"]', title: () => 'Like', text: () => 'Tells this agent to make more like it.' },
    { sel: '.card .menu-btn', title: () => 'More options', text: () => 'Hide it, see fewer from this agent, or snooze the agent for a week.' },
    { sel: '.card .identity', title: el => (el.textContent || '').trim(), text: el => AGENT_ABOUT[agentOf(el)] || 'One of your agents.' },
    { sel: '.card .avatar', title: el => ($('.agent-name', el.closest('.card')) || {}).textContent || 'Agent', text: el => AGENT_ABOUT[agentOf(el)] || 'One of your agents.' },
    { sel: '.story', title: el => ($('.story-label', el) || {}).textContent || 'Story', text: () => 'A short story from your team. Tap to watch.' },
    { sel: '#tune-feed', title: () => 'Tune Feed', text: () => 'Tell your team what to post more or less of.' },
    { sel: '#jam', title: () => 'Jam with Team', text: () => 'Talk to the ShopOS humans about anything, not just one post.' },
    { sel: '#layout-switch-top button', title: el => ctaText(el), text: () => 'Gives every agent its own column. Useful past 30 posts a day.' },
    { sel: '.seg .tab', title: el => ctaText(el), text: el => /chat/i.test(el.textContent) ? 'Ask your team for anything in plain words.' : 'Everything your team made, newest first.' },
    { sel: '.rail-btn[data-nav="home"]', title: () => 'Home', text: () => 'Back to your feed.' },
    { sel: '.rail-btn[data-nav="search"]', title: () => 'Search', text: () => 'Find any post, agent or setting. Cmd K works too.' },
    { sel: '.rail-btn[data-nav="agents"]', title: () => 'Agents', text: () => 'Meet your team and see what each one is working on.' },
    { sel: '.rail-btn[data-nav="alerts"]', title: () => 'Notifications', text: () => 'Approvals, replies from your team, and anything that needs you.' },
    { sel: '.rail-badge, .rail-badge-wrap', title: () => S.brand, text: () => 'Your workspace. Brand memory, connections and settings live here.' },
    { sel: '.credits', title: () => 'Credits', text: () => 'Your balance. New work spends credits when you ask for it.' },
    { sel: '#ver-switch', title: () => 'Feed variant', text: () => 'Prototype only. Switches between versions of this feed.' },
  ];

  // things you can ask for by name; `act` runs only when you tell Pointer to do it
  const INTENTS = [
    { id: 'approve', re: /\b(approve|publish|go live|ship|launch it|post it)\b/, el: inFirst('.btn-bar'),
      title: () => 'Approve lives here', text: () => 'Press it when you are happy. I will never press this one for you.', act: null },
    { id: 'remix', re: /\b(remix|new version|another version|v2|edit|change (the|this)|tweak)\b/, el: inFirst('.act-remix'),
      title: () => 'Remix', text: () => 'Opens the post with the agent that made it. Nothing runs until you send.',
      act: el => el.click(), done: 'Opened it for you. Nothing changes until you save.' },
    { id: 'jam', re: /\b(jam|human|a person|deployment|someone from)\b/, el: inFirst('.act-jam'),
      title: () => 'Jam with team', text: () => 'Brings your ShopOS team onto this exact post.',
      act: el => el.click(), done: 'Opened a Jam on the top post. Nobody is pinged until you send.' },
    { id: 'tune', re: /\b(tune|less of|more of|fewer|stop showing|preferences?)\b/, el: () => $('#tune-feed'),
      title: () => 'Tune Feed', text: () => 'Steer what your team posts more or less of.',
      act: el => el.click(), done: 'Here are your feed settings.' },
    { id: 'pro', re: /\b(pro|deck|columns?|tweetdeck)\b/, el: () => $('#layout-switch-top button'),
      title: () => 'Pro view', text: () => 'One column per agent. Worth it once you pass 30 posts a day.',
      act: el => el.click(), done: 'This is Pro. It is a paid view, so I stopped at the upgrade screen.' },
    { id: 'chat', re: /\b(chat|talk to|message|ask (the|my) team)\b/, el: chatTab,
      title: () => 'Chat', text: () => 'For anything the feed did not think of.',
      act: el => el.click(), done: 'Chat is open. Ask in plain words.' },
    { id: 'feed', re: /\b(feed|home|back)\b/, el: feedTab,
      title: () => 'Your feed', text: () => 'Everything your team made, newest first.',
      act: el => el.click(), done: 'Back on your feed.' },
    { id: 'stories', re: /\b(stor(y|ies)|trends?|what is new|how to)\b/, el: () => $('#stories'),
      title: () => 'Stories', text: () => 'Trends, what is new and how-tos. Tap one when you have a minute.',
      act: () => { const s = $('.story'); s && s.click(); }, done: 'Playing the first story.' },
    { id: 'agents', re: /\b(agents?|who made|my team|team members?)\b/, el: () => $('.rail-btn[data-nav="agents"]'),
      title: () => 'Your agents', text: () => 'Creative, performance, storefront, AI visibility and CRM.',
      act: el => el.click(), done: 'Here is your team.' },
    { id: 'search', re: /\b(search|find|look for)\b/, el: () => $('.rail-btn[data-nav="search"]'),
      title: () => 'Search', text: () => 'Find any post, agent or setting.',
      act: el => el.click(), done: 'Search is open. Type anything.' },
    { id: 'alerts', re: /\b(notification|alerts?|inbox|bell)\b/, el: () => $('.rail-btn[data-nav="alerts"]'),
      title: () => 'Notifications', text: () => 'Approvals and replies land here.', act: el => el.click(), done: 'Your notifications.' },
    { id: 'credits', re: /\b(credits?|balance|cost|price)\b/, el: () => $('.credits'),
      title: () => 'Credits', text: () => 'Your balance. New work spends credits when you ask for it.', act: null },
  ];
  const SUGGEST = [
    ['Where do I', ' approve a post?'],
    ['Make a', ' new version of the top post'],
    ['Switch to', ' Pro view'],
    ['Who', ' made this post?'],
    ['Show me', ' the tour again'],
  ];

  // ---------------------------------------------------------------- tour script
  const TOUR = [
    { id: 'hello', el: () => $('#rail-logo'), mark: null, label: 'Hi',
      title: () => "I'm Pointer.",
      text: () => `Your team just finished reading ${S.host}. Give me 40 seconds and I'll show you where everything is. Move, click or scroll anytime and I'll step aside.` },
    { id: 'post', el: firstCard, mark: 'ring', label: 'A post',
      title: () => 'Your team posts ideas here',
      text: () => { const c = firstCard(); const n = c ? ($('.agent-name', c) || {}).textContent : 'An agent'; return `${n} made this overnight from your brand memory. Every post is a suggestion. Nothing goes live until you say so.`; } },
    { id: 'approve', el: inFirst('.btn-bar'), mark: 'ring', label: 'Approve',
      title: () => { const b = inFirst('.btn-bar')(); return b ? `"${ctaText(b)}"` : 'Approve'; },
      text: () => 'One press approves it. This is the only button that ships anything, so I will never press it for you.',
      demo: { label: 'Show me', run: () => ghostApprove() } },
    { id: 'remix', el: inFirst('.act-remix'), mark: 'circle', label: 'Remix',
      title: () => 'Close, but not quite?',
      text: () => 'Remix opens it with the agent that made it. Change the image, the copy, anything. Nothing runs until you send.' },
    { id: 'jam', el: inFirst('.act-jam'), mark: 'circle', label: 'Jam',
      title: () => 'Want a human on it?',
      text: () => 'Jam brings your ShopOS team onto this exact post. They see what you see.' },
    { id: 'agent', el: inFirst('.identity'), mark: 'ring', label: 'Who made it',
      title: () => 'Five agents, one feed',
      text: () => 'Creative, performance, storefront, AI visibility and CRM all post here. Rest on any name later and I will tell you what they do.' },
    { id: 'stories', el: () => $('#stories'), mark: 'ring', label: 'Stories', scrollTop: true,
      title: () => 'The quick stuff',
      text: () => 'Trends, what is new and how-tos. Tap one when you have a minute.' },
    { id: 'tune', el: () => $('#tune-feed'), mark: 'ring', label: 'Tune',
      title: () => 'Steer what they post',
      text: () => 'More ads, fewer catalog fixes, whatever you need. Your team adjusts from the next batch.' },
    { id: 'pro', el: () => $('#layout-switch-top button'), mark: 'ring', label: 'Pro',
      title: () => 'When the feed gets busy',
      text: () => 'Past 30 posts a day, Pro gives every agent its own column.' },
    { id: 'chat', el: chatTab, mark: 'ring', label: 'Chat',
      title: () => 'Anything else',
      text: () => 'Chat is for whatever the feed did not think of. Ask in plain words.' },
    { id: 'bye', el: () => pill, mark: null, label: "That's it", final: true,
      title: () => "I'll stay close",
      text: () => 'Rest on anything and I will explain it. Press / to ask me where something is, or tell me to do it.' },
  ];
  const TOUR_STEPS = TOUR.filter(s => !s.final && s.id !== 'hello').length;

  // ---------------------------------------------------------------- motion
  const cursorAt = (x, y) => { cur.style.transform = `translate(${x - 3}px, ${y - 2.5}px) rotate(${clamp(S.vx * 1.2, -14, 14)}deg)`; };
  const tipFor = (el, side) => {
    const r = el.getBoundingClientRect();
    const cr = card.getBoundingClientRect();
    const ch = card.classList.contains('on') ? cr : null;
    const small = r.width < 64 && r.height < 64;
    if (small) return { x: r.left + r.width * .62, y: r.top + r.height * .62 };
    const midY = ch ? clamp(ch.top + 22, r.top + 10, r.bottom - 10) : r.top + Math.min(r.height * .3, 40);
    const midX = ch ? clamp(ch.left + 24, r.left + 10, r.right - 10) : r.left + r.width / 2;
    if (side === 'right') return { x: r.right - 10, y: midY };
    if (side === 'left') return { x: r.left + 12, y: midY };
    if (side === 'top') return { x: midX, y: r.top + 10 };
    return { x: midX, y: r.bottom - 8 };
  };

  // place the card beside a rect, on the first side that fits
  const placeCard = (r, preferred) => {
    const w = card.offsetWidth, h = card.offsetHeight, vw = innerWidth, vh = innerHeight, m = 12, g = 20;
    const yAlign = clamp(r.top + Math.min(r.height * .3, 40) - 14, m, vh - h - m);
    const xAlign = clamp(r.left + r.width / 2 - w / 2 + 30, m, vw - w - m);
    const C = {
      right:  { side: 'right',  x: r.right + g + 18, y: yAlign },
      left:   { side: 'left',   x: r.left - g - w,   y: yAlign },
      bottom: { side: 'bottom', x: xAlign, y: r.bottom + g + 14 },
      top:    { side: 'top',    x: xAlign, y: r.top - g - h },
    };
    const order = [preferred, 'right', 'bottom', 'left', 'top'].filter(Boolean);
    const fits = (c) => c.x >= m && c.x + w <= vw - m && c.y >= m && c.y + h <= vh - m;
    let pick = order.map(k => C[k]).find(fits);
    if (!pick) pick = { side: 'inside', x: clamp(r.right - w - 16, m, vw - w - m), y: clamp(r.top + 16, m, vh - h - m) };
    card.style.transform = '';
    card.style.left = pick.x + 'px';
    card.style.top = pick.y + 'px';
    return pick.side === 'inside' ? 'right' : pick.side;
  };

  const tick = () => {
    // where should the companion be right now?
    if (S.mode === 'hold' && S.hold && visible(S.hold.el)) {
      const r = S.hold.el.getBoundingClientRect();
      if (S.hold.card) S.hold.side = placeCard(r, S.hold.pref);
      const t = tipFor(S.hold.el, S.hold.side);
      S.tx = t.x; S.ty = t.y;
    } else if (S.mode === 'follow') {
      if (S.hoverShown && visible(S.hoverShown.el)) {
        const r = S.hoverShown.el.getBoundingClientRect();
        S.hoverShown.side = placeCard(r, S.hoverShown.side);
        const t = tipFor(S.hoverShown.el, S.hoverShown.side);
        S.tx = t.x; S.ty = t.y;
      } else if (S.mouseIn) {
        S.tx = S.mx + 22; S.ty = S.my + 24;
      } else {
        const pr = pill.getBoundingClientRect();
        S.tx = pr.left + 18; S.ty = pr.top - 14;
      }
    }
    const k = S.mode === 'fly' ? .075 : .14, d = S.mode === 'fly' ? .80 : .70;
    if (REDUCED) { S.x = S.tx; S.y = S.ty; S.vx = S.vy = 0; }
    else {
      S.vx = S.vx * d + (S.tx - S.x) * k;
      S.vy = S.vy * d + (S.ty - S.y) * k;
      S.x += S.vx; S.y += S.vy;
    }
    cursorAt(S.x, S.y);
    if (S.arrive && Math.hypot(S.tx - S.x, S.ty - S.y) < 2.5 && Math.hypot(S.vx, S.vy) < .6) {
      const done = S.arrive; S.arrive = null; done();
    }
    drawMark();
    requestAnimationFrame(tick);
  };

  const flyTo = (x, y, maxMs = 1500) => new Promise(res => {
    S.mode = 'fly'; S.tx = x; S.ty = y;
    if (S.tour && !S.tour.paused) cur.classList.remove('quiet');
    let over = false;
    const finish = () => { if (over) return; over = true; res(); };
    S.arrive = finish;
    setTimeout(() => { if (S.arrive === finish) S.arrive = null; finish(); }, maxMs);
  });

  const press = async (x, y) => {
    cur.classList.add('press');
    ripple.style.left = x + 'px'; ripple.style.top = y + 'px';
    ripple.classList.remove('go'); void ripple.offsetWidth; ripple.classList.add('go');
    await sleep(160);
    cur.classList.remove('press');
  };

  // ---------------------------------------------------------------- hand-drawn marks
  const rng = (seed) => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const smooth = (pts) => {
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
    }
    return d;
  };
  const sketch = (r, kind, seed, pass) => {
    const R = rng(seed + pass * 977), j = (a) => (R() - .5) * a;
    const pad = kind === 'circle' ? 7 : 8;
    const x = r.left - pad, y = r.top - pad, w = r.width + pad * 2, h = r.height + pad * 2;
    const pts = [];
    if (kind === 'circle') {
      const cx = x + w / 2, cy = y + h / 2, rx = w / 2 + 2, ry = h / 2 + 2, start = -2.3 + j(.4), turns = 1.12, n = 26;
      for (let i = 0; i <= n; i++) {
        const a = start + (i / n) * Math.PI * 2 * turns, grow = 1 + (i / n) * .08;
        pts.push([cx + Math.cos(a) * rx * grow + j(1.6), cy + Math.sin(a) * ry * grow + j(1.6)]);
      }
    } else {
      const rad = Math.min(16, h / 2.4, w / 3), jit = Math.min(2.2, Math.max(1, w / 260));
      const corner = (cx, cy, a0) => { for (let i = 0; i <= 3; i++) { const a = a0 + (i / 3) * Math.PI / 2; pts.push([cx + Math.cos(a) * rad + j(jit), cy + Math.sin(a) * rad + j(jit)]); } };
      const edge = (x1, y1, x2, y2, n) => { for (let i = 1; i < n; i++) pts.push([x1 + (x2 - x1) * i / n + j(jit), y1 + (y2 - y1) * i / n + j(jit)]); };
      const nx = Math.max(2, Math.round(w / 120)), ny = Math.max(2, Math.round(h / 120));
      pts.push([x + rad + w * .12 + j(4), y + j(2) - 2]);                    // start a little in from the corner
      edge(x + rad + w * .12, y, x + w - rad, y, nx);
      corner(x + w - rad, y + rad, -Math.PI / 2);
      edge(x + w, y + rad, x + w, y + h - rad, ny);
      corner(x + w - rad, y + h - rad, 0);
      edge(x + w - rad, y + h, x + rad, y + h, nx);
      corner(x + rad, y + h - rad, Math.PI / 2);
      edge(x, y + h - rad, x, y + rad, ny);
      corner(x + rad, y + rad, Math.PI);
      pts.push([x + rad + w * .22 + j(4), y + 3 + j(2)]);                   // overshoot past the start, like a pen
    }
    return smooth(pts);
  };
  const setMark = (el, kind = 'ring', soft = false) => {
    clearMark();
    if (!el || !kind) return;
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    if (soft) g.classList.add('soft');
    g.innerHTML = '<path class="p1"/><path class="p2"/>';
    marksSvg.appendChild(g);
    S.mark = { el, g, kind, seed: (Math.random() * 1e9) | 0, last: '', drawn: false };
  };
  const clearMark = () => {
    if (!S.mark) return;
    const g = S.mark.g; g.classList.add('out'); setTimeout(() => g.remove(), 260);
    S.mark = null;
  };
  const drawMark = () => {
    const m = S.mark; if (!m) return;
    if (!visible(m.el)) { m.g.style.opacity = 0; return; }
    m.g.style.opacity = '';
    const r = m.el.getBoundingClientRect();
    const key = `${r.left | 0},${r.top | 0},${r.width | 0},${r.height | 0}`;
    if (key === m.last) return;
    m.last = key;
    const [p1, p2] = m.g.children;
    p1.setAttribute('d', sketch(r, m.kind, m.seed, 0));
    p2.setAttribute('d', sketch(r, m.kind, m.seed, 1));
    if (!m.drawn) {
      m.drawn = true;
      [p1, p2].forEach((p, i) => {
        const L = p.getTotalLength();
        p.style.strokeDasharray = L; p.style.strokeDashoffset = L;
        if (REDUCED) { p.style.strokeDashoffset = 0; return; }
        p.getBoundingClientRect();
        p.style.transition = `stroke-dashoffset ${m.kind === 'circle' ? 420 : 640}ms cubic-bezier(.6,.05,.3,1) ${i * 140}ms`;
        p.style.strokeDashoffset = 0;
      });
    } else {
      [p1, p2].forEach(p => { p.style.transition = 'none'; p.style.strokeDasharray = 'none'; p.style.strokeDashoffset = 0; });
    }
  };

  // ---------------------------------------------------------------- the card
  let typeToken = 0;
  const typeOut = async (text) => {
    const my = ++typeToken;
    card.classList.remove('typed');
    cardTyped.textContent = '';
    if (REDUCED) { cardTyped.textContent = text; card.classList.add('typed'); return; }
    for (let i = 0; i < text.length; i++) {
      if (my !== typeToken) return;
      cardTyped.textContent = text.slice(0, i + 1);
      const ch = text[i];
      await sleep(ch === '.' || ch === ',' ? 70 : 13 + Math.random() * 10);
    }
    if (my === typeToken) card.classList.add('typed');
  };
  const showCard = ({ label, title, text, buttons = [], hover = false, dots = null }) => {
    card.classList.toggle('hover', hover);
    $('.pt-label', card).style.display = label ? '' : 'none';
    cardLabel.textContent = label || '';
    cardTitle.textContent = title || '';
    cardRow.innerHTML = '';
    cardRow.hidden = !buttons.length && !dots;
    if (dots) {
      const d = document.createElement('span'); d.className = 'pt-dots';
      d.innerHTML = Array.from({ length: dots[1] }, (_, i) => `<i class="${i === dots[0] ? 'on' : ''}"></i>`).join('');
      cardRow.appendChild(d);
    }
    const sp = document.createElement('span'); sp.className = 'sp'; cardRow.appendChild(sp);
    buttons.forEach(b => {
      const el = document.createElement('button');
      el.type = 'button'; el.className = 'pt-btn ' + (b.kind || ''); el.textContent = b.label;
      el.addEventListener('click', (e) => { e.stopPropagation(); b.run(); });
      if (b.left) cardRow.insertBefore(el, sp); else cardRow.appendChild(el);
    });
    cardBar.style.transition = 'none'; cardBar.style.transform = 'scaleX(0)';
    card.classList.add('on');
    return typeOut(text || '');
  };
  const hideCard = () => { typeToken++; card.classList.remove('on'); S.hold = null; };

  // ---------------------------------------------------------------- tour
  let autoTimer = null, autoLeft = 0, autoAt = 0, autoPaused = false;
  const stopAuto = () => { clearTimeout(autoTimer); autoTimer = null; };
  const runAuto = (ms, next) => {
    stopAuto(); autoLeft = ms; autoAt = performance.now(); autoPaused = false;
    cardBar.style.transition = 'none'; cardBar.style.transform = 'scaleX(0)'; cardBar.getBoundingClientRect();
    cardBar.style.transition = `transform ${ms}ms linear`; cardBar.style.transform = 'scaleX(1)';
    autoTimer = setTimeout(next, ms);
    runAuto.next = next;
  };
  const pauseAuto = () => {
    if (!autoTimer || autoPaused) return;
    autoPaused = true; clearTimeout(autoTimer);
    autoLeft -= performance.now() - autoAt;
    const s = getComputedStyle(cardBar).transform; cardBar.style.transition = 'none'; cardBar.style.transform = s;
  };
  const resumeAuto = () => {
    if (!autoPaused || !S.tour || S.tour.paused) return;
    autoPaused = false; autoAt = performance.now();
    cardBar.style.transition = `transform ${Math.max(autoLeft, 0)}ms linear`; cardBar.style.transform = 'scaleX(1)';
    autoTimer = setTimeout(runAuto.next, Math.max(autoLeft, 0));
  };
  card.addEventListener('mouseenter', pauseAuto);
  card.addEventListener('mouseleave', resumeAuto);

  const scrollToEl = async (el, top) => {
    const behavior = REDUCED ? 'auto' : 'smooth';
    if (top) {
      if (window.scrollY < 4) return;
      window.scrollTo({ top: 0, behavior });
    } else {
      const r = el.getBoundingClientRect(), vh = innerHeight;
      if (r.top >= 80 && r.bottom <= vh - 90) return;
      const dy = r.height > vh - 180 ? r.top - 90 : r.top + r.height / 2 - vh / 2;
      window.scrollBy({ top: dy, behavior });
    }
    await sleep(REDUCED ? 60 : 650);
  };

  const startTour = async (from = 0) => {
    closePanel();
    hideHover();
    const token = {};
    S.tour = { i: from, token, paused: false };
    resumeEl.hidden = true;
    cur.classList.remove('off', 'small');
    cur.classList.remove('quiet');
    dock.classList.add('away');
    for (let i = from; i < TOUR.length; i++) {
      if (!S.tour || S.tour.token !== token || S.tour.paused) return;
      S.tour.i = i;
      const step = TOUR[i];
      const el = step.el();
      if (!visible(el) && step.id !== 'bye') continue;           // recover: skip what is not on the page
      if (step.final) dock.classList.remove('away');
      await playStep(step, el, token);
      if (!S.tour || S.tour.token !== token || S.tour.paused) return;
    }
    endTour(true);
  };

  const playStep = (step, el, token) => new Promise(async (resolve) => {
    stopAuto();
    S.stepMoves = 0;
    clearMark();
    card.classList.remove('on');
    if (step.id !== 'hello' && step.id !== 'bye') await scrollToEl(el, step.scrollTop);
    if (!S.tour || S.tour.token !== token) return resolve();
    const r = el.getBoundingClientRect();
    // lay the card out first so the pointer knows which edge to land on
    showCardShell(step);
    const side = placeCard(r, step.id === 'hello' ? 'right' : step.id === 'bye' ? 'top' : null);
    const t = tipFor(el, side);
    await flyTo(t.x, t.y);
    if (!S.tour || S.tour.token !== token) return resolve();
    S.mode = 'hold'; S.hold = { el, side, card: true, pref: side };
    cur.classList.add('quiet');
    if (step.mark) setMark(el, step.mark);
    const n = TOUR.filter(s => s.id !== 'hello' && !s.final).indexOf(step);
    const label = n >= 0 ? `${String(n + 1).padStart(2, '0')} / ${String(TOUR_STEPS).padStart(2, '0')} · ${step.label}` : step.label;
    const next = () => { stopAuto(); resolve(); };
    const buttons = [];
    if (step.id === 'hello') buttons.push({ label: 'Skip', kind: 'link', left: true, run: () => endTour(false) });
    else if (!step.final) buttons.push({ label: 'End tour', kind: 'link', left: true, run: () => endTour(false) });
    if (step.demo) buttons.push({ label: step.demo.label, run: async () => { stopAuto(); await step.demo.run(); if (S.tour && S.tour.token === token) runAuto(2600, next); } });
    buttons.push({ label: step.final ? 'Got it' : step.id === 'hello' ? "Let's go" : 'Next', kind: 'primary', run: next });
    const text = step.text();
    const typing = showCard({ label, title: step.title(), text, buttons });
    await typing;
    if (!S.tour || S.tour.token !== token) return resolve();
    const read = clamp(1800 + text.split(' ').length * 230, 3200, 7800);
    runAuto(step.final ? read + 2500 : read, next);
  });
  // the card has to exist at its final size before we place it
  const showCardShell = (step) => {
    card.classList.remove('hover');
    cardTitle.textContent = step.title();
    cardTyped.textContent = step.text();
    cardRow.hidden = false;
    if (!cardRow.children.length) cardRow.innerHTML = '<button class="pt-btn">x</button>';
  };

  const pauseTour = () => {
    if (!S.tour || S.tour.paused) return;
    S.tour.paused = true;
    stopAuto();
    const at = S.tour.i;
    hideCard(); clearMark();
    S.mode = 'follow'; cur.classList.add('small', 'quiet');
    dock.classList.remove('away');
    resumeEl.hidden = false;
    S.resumeFrom = at;
    say('All yours. I paused the tour where you left it.');
  };
  const endTour = (finished) => {
    stopAuto();
    S.tour = null;
    hideCard(); clearMark();
    resumeEl.hidden = true;
    dock.classList.remove('away');
    S.mode = 'follow';
    cur.classList.add('small', 'quiet');
    if (!FINE) cur.classList.add('off');
    if (!finished) say('Tour closed. Press / if you want me.');
  };

  // pretend-press the approve button without touching the real one
  const ghostApprove = async () => {
    const b = inFirst('.btn-bar')(); if (!b) return;
    const r = b.getBoundingClientRect();
    S.mode = 'fly';
    await flyTo(r.left + r.width * .35, r.top + r.height * .55, 900);
    await press(S.x, S.y);
    Object.assign(ghost.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
    ghost.innerHTML = '&#10003; Approved <small>in this demo. Nothing was published.</small>';
    ghost.classList.add('on');
    const follow = () => { if (!ghost.classList.contains('on')) return; const q = b.getBoundingClientRect(); ghost.style.left = q.left + 'px'; ghost.style.top = q.top + 'px'; requestAnimationFrame(follow); };
    follow();
    S.mode = 'hold'; cur.classList.add('quiet');
    await sleep(2300);
    ghost.classList.remove('on');
  };

  // hands off: the tour steps aside the moment you do something yourself
  const ours = (t) => t && (t.closest?.('.pt-card') || t.closest?.('.pt-dock'));
  addEventListener('pointerdown', (e) => { if (S.tour && !S.tour.paused && !ours(e.target)) pauseTour(); }, true);
  addEventListener('wheel', () => { if (S.tour && !S.tour.paused) pauseTour(); }, { passive: true });
  addEventListener('touchmove', () => { if (S.tour && !S.tour.paused) pauseTour(); }, { passive: true });

  // ---------------------------------------------------------------- explore (hover)
  let hoverTimer = null, hideTimer = null;
  const hideHover = () => {
    clearTimeout(hoverTimer); clearTimeout(hideTimer);
    if (S.hoverShown) { S.hoverShown = null; hideCard(); clearMark(); cur.classList.add('quiet'); }
    S.hover = null;
  };
  const findHover = (x, y) => {
    let best = null;
    for (const h of HOVER) {
      for (const el of $$(h.sel)) {
        if (!visible(el)) continue;
        const r = el.getBoundingClientRect();
        const dx = Math.max(r.left - x, 0, x - r.right), dy = Math.max(r.top - y, 0, y - r.bottom);
        const d = Math.hypot(dx, dy);
        if (d > 10) continue;
        const area = r.width * r.height;
        if (!best || d < best.d || (d === best.d && area < best.area)) best = { h, el, d, area };
      }
    }
    return best;
  };
  const showHover = (hit) => {
    S.hoverShown = { el: hit.el, side: null };
    showCard({ label: null, title: hit.h.title(hit.el), text: hit.h.text(hit.el), hover: true });
    S.hoverShown.side = placeCard(hit.el.getBoundingClientRect());
    setMark(hit.el, hit.el.getBoundingClientRect().width < 64 ? 'circle' : 'ring', true);
  };
  addEventListener('mousemove', (e) => {
    S.mx = e.clientX; S.my = e.clientY; S.mouseIn = true;
    if (S.tour && !S.tour.paused) {
      if (!ours(e.target)) {
        S.stepMoves += Math.hypot(e.movementX || 0, e.movementY || 0);
        if (S.stepMoves > 900) pauseTour();
      }
      return;
    }
    if (!S.ready || S.mode !== 'follow' || !S.explore || !FINE) return;
    if (ours(e.target) || document.body.classList.contains('tab-chat') || openOverlay()) { hideHover(); return; }
    const hit = findHover(e.clientX, e.clientY);
    if (hit && S.hoverShown && hit.el === S.hoverShown.el) { clearTimeout(hideTimer); return; }
    if (!hit) {
      clearTimeout(hoverTimer); S.hover = null;
      if (S.hoverShown) { clearTimeout(hideTimer); hideTimer = setTimeout(hideHover, 220); }
      return;
    }
    if (S.hover && S.hover.el === hit.el) return;
    S.hover = hit;
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => { if (S.hover === hit) { if (S.hoverShown) { hideCard(); clearMark(); } showHover(hit); } }, S.hoverShown ? 120 : 480);
  }, { passive: true });
  document.addEventListener('mouseleave', () => { S.mouseIn = false; hideHover(); });
  addEventListener('scroll', () => { if (S.hoverShown) hideHover(); }, { passive: true });
  // any dialog actually on screen (closed ones sit offscreen or at zero opacity)
  const openOverlay = () => $$('[role="dialog"]').some(el => {
    if (el.closest('#pt-layer') || el.hidden) return false;
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    return r.width > 2 && r.height > 2 && r.left < innerWidth - 4 && r.right > 4 && r.top < innerHeight && r.bottom > 0
      && cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > .05;
  }) || !$('#view-feed') || $('#view-feed').hidden;

  // ---------------------------------------------------------------- dock: ask and act
  let sayTimer = null;
  const say = (text, ms = 4200) => {
    sayEl.textContent = text; sayEl.classList.add('on');
    clearTimeout(sayTimer); sayTimer = setTimeout(() => sayEl.classList.remove('on'), ms);
  };
  const openPanel = () => {
    if (S.tour && !S.tour.paused) pauseTour();
    hideHover();
    pill.hidden = true; panel.hidden = false;
    sayEl.classList.remove('on');
    $('.pt-sugs', dock).innerHTML = SUGGEST.map(([a, b]) => `<button type="button" class="pt-sug" data-q="${a + b}"><b>${a}</b>${b}</button>`).join('');
    input.focus();
  };
  const closePanel = () => { panel.hidden = true; pill.hidden = false; input.value = ''; stopMic(); };
  pill.addEventListener('click', (e) => {
    if (e.target.closest('.pt-resume')) { startTour(S.resumeFrom || 0); return; }
    openPanel();
  });
  dock.addEventListener('click', (e) => {
    const b = e.target.closest('[data-pt], .pt-sug');
    if (!b) return;
    if (b.classList.contains('pt-sug')) { input.value = b.dataset.q; handle(b.dataset.q); return; }
    const k = b.dataset.pt;
    if (k === 'close') closePanel();
    if (k === 'tour') startTour(0);
    if (k === 'explore') { S.explore = !S.explore; b.setAttribute('aria-pressed', String(S.explore)); if (!S.explore) hideHover(); }
  });
  $('.pt-form', dock).addEventListener('submit', (e) => { e.preventDefault(); if (input.value.trim()) handle(input.value); });

  const ASKING = /^(where|what|how|which|why|who|is|can|does|do i|show me where|help)/;
  const DOING = /^(please )?(open|go|take|switch|make|start|turn|do|remix|jam|tune|launch|publish|approve|click|press|create|bring|play|show me (the|my)|back|find|search|get)/;

  const handle = async (raw) => {
    const q = raw.toLowerCase().trim().replace(/[?!.]+$/, '');
    closePanel();
    if (/\b(tour|show me around|walk ?through|start over|onboard)\b/.test(q)) return startTour(0);
    if (/^(who made|who posted)/.test(q)) { const el = inFirst('.identity')(); if (el) return pointAt(el, { title: (el.textContent || '').trim(), text: AGENT_ABOUT[agentOf(el)] || '' }); }
    const intent = INTENTS.find(i => i.re.test(q));
    if (!intent) {
      // fall back to whatever on screen shares a word with the question
      const words = q.split(/\W+/).filter(w => w.length > 3);
      for (const h of HOVER) for (const el of $$(h.sel)) {
        if (!visible(el)) continue;
        const hay = (h.title(el) + ' ' + h.text(el)).toLowerCase();
        if (words.some(w => hay.includes(w))) return pointAt(el, { title: h.title(el), text: h.text(el) });
      }
      return say("I don't know that one yet. Try asking where to approve, or tell me to switch to Pro.", 5200);
    }
    const el = intent.el();
    if (!visible(el)) return say(`I can't see ${intent.title().toLowerCase()} on this screen right now.`);
    const wantsAct = DOING.test(q) && !ASKING.test(q);
    if (wantsAct && intent.act) return actOn(el, intent);
    if (wantsAct && !intent.act) return pointAt(el, { title: intent.title(), text: intent.id === 'approve' ? "That one is yours to press. It's right here." : intent.text() });
    return pointAt(el, { title: intent.title(), text: intent.text(), intent });
  };

  const pointAt = async (el, { title, text, intent }) => {
    hideHover();
    cur.classList.remove('off', 'small', 'quiet');
    await scrollToEl(el);
    showCardShell({ title: () => title, text: () => text });
    const side = placeCard(el.getBoundingClientRect());
    const t = tipFor(el, side);
    await flyTo(t.x, t.y);
    S.mode = 'hold'; S.hold = { el, side, card: true, pref: side };
    cur.classList.add('quiet');
    setMark(el, el.getBoundingClientRect().width < 64 ? 'circle' : 'ring');
    const done = () => { hideCard(); clearMark(); S.mode = 'follow'; cur.classList.add('small', 'quiet'); };
    const buttons = [];
    if (intent && intent.act) buttons.push({ label: 'Do it for me', run: () => { done(); actOn(el, intent); } });
    buttons.push({ label: 'Got it', kind: 'primary', run: done });
    await showCard({ label: 'Here', title, text, buttons });
    S.pointDone = setTimeout(() => { if (S.hold && S.hold.el === el && !card.matches(':hover')) done(); }, 9000);
  };

  const actOn = async (el, intent) => {
    hideHover();
    cur.classList.remove('off', 'small', 'quiet');
    await scrollToEl(el);
    const r = el.getBoundingClientRect();
    const x = r.left + Math.min(r.width * .5, 40), y = r.top + r.height * .6;
    await flyTo(x, y, 1200);
    setMark(el, r.width < 64 ? 'circle' : 'ring');
    await sleep(280);
    await press(x, y);
    intent.act(el);
    await sleep(360);
    clearMark();
    S.mode = 'follow'; cur.classList.add('small', 'quiet');
    say(intent.done || 'Done.');
  };

  // voice, where the browser has it
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec = null;
  const stopMic = () => { if (rec) { try { rec.stop(); } catch (_) {} } micBtn.classList.remove('live'); };
  micBtn.addEventListener('click', () => {
    if (!SR) { input.placeholder = 'Voice is not available here. Type it instead.'; input.focus(); return; }
    if (micBtn.classList.contains('live')) return stopMic();
    rec = new SR(); rec.lang = 'en-IN'; rec.interimResults = true;
    micBtn.classList.add('live'); input.placeholder = 'Listening...';
    rec.onresult = (e) => { const t = [...e.results].map(r => r[0].transcript).join(' '); input.value = t; if (e.results[e.results.length - 1].isFinal) { stopMic(); handle(t); } };
    rec.onerror = () => { stopMic(); input.placeholder = "Didn't catch that. Type it instead."; };
    rec.onend = () => micBtn.classList.remove('live');
    rec.start();
  });

  // keyboard: / to ask, Esc to put Pointer away
  addEventListener('keydown', (e) => {
    if (!S.ready) return;
    const typing = /INPUT|TEXTAREA/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
    if (e.key === '/' && !typing && !document.body.classList.contains('tab-chat')) { e.preventDefault(); openPanel(); return; }
    if (e.key === 'Escape') {
      if (!panel.hidden) { closePanel(); return; }
      if (S.tour) { endTour(false); return; }
      if (S.hold) { hideCard(); clearMark(); S.mode = 'follow'; cur.classList.add('small', 'quiet'); }
    }
  });

  // chat has its own composer; Pointer bows out there
  new MutationObserver(() => {
    const chat = document.body.classList.contains('tab-chat');
    if (chat) { hideHover(); if (!S.tour) cur.classList.add('off'); }
    else if (S.ready && FINE) cur.classList.remove('off');
  }).observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // ---------------------------------------------------------------- start
  const wake = async (detail = {}) => {
    if (S.ready) return;
    S.ready = true;
    S.brand = detail.brand || S.brand;
    S.host = detail.host || S.host;
    layer.hidden = false;
    dock.hidden = false;
    requestAnimationFrame(tick);
    // Pointer is the arrow in the ShopOS mark: it steps out of the logo
    const logo = $('#rail-logo .mark') || $('#rail-logo');
    const lr = logo.getBoundingClientRect();
    S.x = S.tx = lr.left + lr.width * .5; S.y = S.ty = lr.top + lr.height * .78;
    S.mode = 'fly';
    cursorAt(S.x, S.y);
    await sleep(900);
    cur.classList.remove('off'); cur.classList.add('born');
    setTimeout(() => cur.classList.remove('born'), 800);
    await sleep(500);
    startTour(0);
  };
  window.addEventListener('feed:ready', (e) => wake(e.detail));
  window.__pointer = { startTour, handle, wake };
})();
