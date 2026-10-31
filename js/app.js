(() => {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // ---------- icons ----------
  const ICONS = {
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    flag: '<path d="M6 21V4"/><path class="f" d="M6 3.5h11.5l-2.6 4.25 2.6 4.25H6z"/>',
    locate: '<path class="f" d="M20.6 3.4 3.9 10.4c-.9.4-.8 1.6.1 1.8l6.5 1.4 1.4 6.5c.2.9 1.4 1 1.8.1z"/>',
    qr: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path class="f" d="M13.5 13.5H16V16h-2.5zM17.5 17.5H20V20h-2.5zM13.5 18H16v2h-2.5zM18 13.5h2V16h-2z"/>',
    bike: '<circle cx="5.5" cy="16" r="3.5"/><circle cx="18.5" cy="16" r="3.5"/><path d="M5.5 16h6l5-6.5h-7zM9.5 9.5l2 6.5M9.5 9.5 9 7.6M7.6 7.6h3M16.5 9.5l2 6.5M16.5 9.5l-.8-3h2.6"/>',
    bolt: '<path class="f" d="M13.6 2 5 13.4h6.1L10 22l9-11.6h-6.2z"/>',
    train: '<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10h14M8.5 21l1.6-4M15.5 21l-1.6-4"/><circle class="f" cx="8.8" cy="13.6" r="1"/><circle class="f" cx="15.2" cy="13.6" r="1"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    cash: '<rect x="2.5" y="5.5" width="19" height="11" rx="1.5"/><circle cx="12" cy="11" r="2.5"/><path d="M2.5 19.5h19"/>',
    close: '<path d="M7 7l10 10M17 7 7 17"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle class="f" cx="12" cy="7.8" r="1.2"/>',
    dock: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M10 16.5v-9h3a3 3 0 0 1 0 6h-3"/>',
    game: '<rect x="2.5" y="7" width="19" height="11" rx="5.5"/><path d="M7.5 10.5v4M5.5 12.5h4"/><circle class="f" cx="15.5" cy="11.5" r="1.2"/><circle class="f" cx="18" cy="14" r="1.2"/>',
    history: '<path d="M3.5 12a8.5 8.5 0 1 0 2.5-6"/><path d="M3.5 4v4.5H8"/><path d="M12 8v4.5l3 1.8"/>',
    wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><circle class="f" cx="16.5" cy="14.5" r="1.3"/>',
    angel: '<ellipse cx="12" cy="4.5" rx="5" ry="1.8"/><circle cx="12" cy="12.5" r="4"/><path d="M5 21c1-3 3.8-4.5 7-4.5s6 1.5 7 4.5"/>',
    help: '<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.5a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.6v.4"/><circle class="f" cx="12" cy="16.8" r="1.2"/>',
    share: '<path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/>',
    replay: '<path d="M20.5 12a8.5 8.5 0 1 1-2.5-6"/><path d="M20.5 4v4.5H16"/>',
    tip: '<circle cx="12" cy="12" r="9"/><path d="M15 9.3c-.5-.9-1.6-1.5-3-1.5-1.7 0-2.9.9-2.9 2.1 0 3 5.9 1.5 5.9 4.3 0 1.3-1.3 2.1-3 2.1-1.4 0-2.6-.6-3.1-1.6M12 5.8v2M12 16.3v1.9"/>',
    copy: '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.5"/><path d="M15.5 8.5V6.5a2.5 2.5 0 0 0-2.5-2.5H6.5A2.5 2.5 0 0 0 4 6.5V13a2.5 2.5 0 0 0 2.5 2.5h2"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  };
  const ic = (name, cls = '') => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

  const BIKE_ART = `<svg class="bike-art" viewBox="0 0 140 92" aria-hidden="true"><g fill="none" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="32" cy="64" r="18" fill="#2f86f0" stroke="none"/>
    <path d="M18 58c4-6 10-9 16-8M20 72c6-3 14-4 22-2" stroke="#8cc0ff" stroke-width="2"/>
    <circle cx="32" cy="64" r="20" stroke="#2a2a38" stroke-width="5"/>
    <circle cx="108" cy="64" r="20" stroke="#2a2a38" stroke-width="5"/>
    <path d="M108 64 96 52M108 64l14 6M108 64l-4 16" stroke="#9a99ab" stroke-width="1.5"/>
    <path d="M88 60a20 20 0 0 1 38-8" stroke="#1f64d6" stroke-width="5"/>
    <path d="M98 24C90 46 80 64 62 66" stroke="#1f64d6" stroke-width="9"/>
    <path d="M62 66 54 32" stroke="#1f64d6" stroke-width="7"/>
    <path d="M62 66H32M54 36 32 64" stroke="#1f64d6" stroke-width="5"/>
    <path d="M98 24l10 40M98 24l-5-12M85 11l16 2" stroke="#2a2a38" stroke-width="5"/>
    <path d="M44 29h18" stroke="#2a2a38" stroke-width="7"/>
    <path d="M101 15h27v13h-25" stroke="#2a2a38" stroke-width="3.5"/>
    <circle cx="62" cy="66" r="5.5" fill="#2a2a38" stroke="none"/>
    <circle cx="32" cy="64" r="3" fill="#2a2a38" stroke="none"/>
    <circle cx="108" cy="64" r="3" fill="#2a2a38" stroke="none"/>
  </g></svg>`;

  $$('[data-ic]').forEach(el => el.insertAdjacentHTML('afterbegin', ic(el.dataset.ic)));
  $$('[data-art="bike"]').forEach(el => { el.innerHTML = BIKE_ART; });

  // ---------- helpers ----------
  const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const randomBike = () => `${rand(100, 999)}-${rand(100, 999)}`;

  // Shuffled draw without repeats until the list is exhausted.
  function bag(items) {
    let pool = [];
    return () => {
      if (!pool.length) {
        pool = items.slice();
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
      }
      return pool.pop();
    };
  }

  const store = {
    get(k, fallback) { try { const v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
  };

  const params = new URLSearchParams(location.search);
  const urlBike = (params.get('b') || '').replace(/[^\w\- ]/g, '').slice(0, 14).toUpperCase();

  let toastTimer;
  function toast(msg, opts = {}) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.toggle('top', !!opts.top);
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), opts.ms || 2600);
  }

  // ---------- sound & haptics ----------
  let ac = null;
  function audio() {
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      if (ac.state === 'suspended') ac.resume();
    } catch (e) { ac = null; }
    return ac;
  }
  function tone(freq, at, dur, type = 'square', vol = 0.04) {
    const a = audio();
    if (!a || a.state !== 'running') return;
    const t0 = a.currentTime + at;
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(a.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.02);
  }
  const sfx = {
    dock() { tone(1568, 0, 0.08); tone(1568, 0.13, 0.08); },
    miss() { tone(150, 0, 0.22, 'sawtooth', 0.05); },
    fail() { tone(440, 0, 0.12, 'triangle', 0.07); tone(311, 0.15, 0.25, 'triangle', 0.07); },
  };
  const buzz = p => {
    // Browsers block vibration until the visitor has tapped the page at least once.
    const tapped = !navigator.userActivation || navigator.userActivation.hasBeenActive;
    try { if (navigator.vibrate && tapped) navigator.vibrate(p); } catch (e) { /* unsupported */ }
  };

  // ---------- map basics ----------
  // OpenFreeMap: free vector tiles, no API key. Restyled after load to look like the app's Google map.
  const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';
  const CENTER = [CONFIG.center[1], CONFIG.center[0]]; // MapLibre wants [lng, lat]
  const lngLat = s => [s[2], s[1]];

  function createMap(container, opts) {
    const map = new maplibregl.Map({
      container,
      style: MAP_STYLE,
      center: CENTER,
      zoom: 15,
      attributionControl: false,
      ...opts,
    });
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-left');
    map.on('style.load', () => restyle(map));
    // Compact attribution starts expanded; fold it to the (i) button like the real app's tiny map credit.
    map.once('load', () => {
      const attrib = map.getContainer().querySelector('.maplibregl-ctrl-attrib');
      if (attrib) { attrib.classList.remove('maplibregl-compact-show'); attrib.removeAttribute('open'); }
    });
    return map;
  }

  function restyle(map) {
    const paint = (layer, prop, value) => { if (map.getLayer(layer)) map.setPaintProperty(layer, prop, value); };
    paint('background', 'background-color', '#eef0f3');
    paint('landuse_residential', 'fill-color', '#eceef1');
    paint('building', 'fill-color', '#e4e6ea');
    paint('building', 'fill-outline-color', '#d8dae0');
    paint('park', 'fill-color', '#c9ebcd');
    paint('park', 'fill-outline-color', '#b6dfba');
    paint('water', 'fill-color', '#a8d6fb');
    ['road_secondary_tertiary', 'road_trunk_primary', 'bridge_secondary_tertiary', 'bridge_trunk_primary']
      .forEach(l => paint(l, 'line-color', '#ffffff'));
    ['road_motorway', 'bridge_motorway'].forEach(l => paint(l, 'line-color', '#fde293'));
    map.getStyle().layers
      .filter(l => /casing$/.test(l.id) && !/motorway/.test(l.id))
      .forEach(l => paint(l.id, 'line-color', '#d9dce1'));
    ['highway-name-minor', 'highway-name-major'].forEach(l => paint(l, 'text-color', '#6d7178'));
    paint('poi_transit', 'text-color', '#1967d2');
    if (map.getLayer('building-3d')) map.setLayoutProperty('building-3d', 'visibility', 'none');
  }

  function addPin(map, at, html, anchor = 'bottom') {
    const el = document.createElement('div');
    el.className = anchor === 'bottom' ? 'pin' : 'pin-c';
    el.innerHTML = html;
    return new maplibregl.Marker({ element: el, anchor }).setLngLat(at).addTo(map);
  }

  // Stable fake availability per station.
  function stationStats(i) {
    let h = (i * 2654435761) >>> 0;
    const r = () => (h = (Math.imul(h, 1103515245) + 12345) >>> 0) / 4294967296;
    const cap = STATIONS[i][3];
    const classic = Math.floor(r() * Math.min(cap, 22));
    const ebikes = r() < 0.3 ? 0 : Math.floor(r() * 9);
    return { classic, ebikes, docks: Math.max(0, cap - classic - ebikes) };
  }

  // ---------- home ----------
  const Home = {
    map: null,
    markers: [],
    selected: null,
    ready: null,

    init() {
      const map = this.map = createMap('homeMap', {
        minZoom: 11, maxZoom: 18.5, dragRotate: false, pitchWithRotate: false, touchPitch: false,
      });
      map.touchZoomRotate.disableRotation();
      this.ready = new Promise(res => map.once('load', res));
      const me = document.createElement('div');
      me.className = 'me';
      new maplibregl.Marker({ element: me, anchor: 'center' }).setLngLat(CENTER).addTo(map);
      map.on('moveend', () => this.render());
      map.on('click', e => { if (!e.originalEvent.target.closest('.pin')) this.showCard('home'); });
      new ResizeObserver(() => map.resize()).observe(map.getContainer());
      this.render();
      this.renderTransit();
    },

    render() {
      const map = this.map;
      this.markers.forEach(m => m.remove());
      this.markers = [];
      if (map.getZoom() < 13.5) return;
      const b = map.getBounds();
      const padLat = (b.getNorth() - b.getSouth()) * 0.15;
      const padLng = (b.getEast() - b.getWest()) * 0.15;
      const [s0, w0, n0, e0] = [b.getSouth() - padLat, b.getWest() - padLng, b.getNorth() + padLat, b.getEast() + padLng];
      const c = map.getCenter();
      const vis = [];
      STATIONS.forEach((s, i) => { if (s[1] > s0 && s[1] < n0 && s[2] > w0 && s[2] < e0) vis.push(i); });
      const d2 = i => (STATIONS[i][1] - c.lat) ** 2 + (STATIONS[i][2] - c.lng) ** 2;
      vis.sort((a, z) => d2(a) - d2(z));
      for (const i of vis.slice(0, 160)) {
        const st = stationStats(i);
        const sel = i === this.selected;
        const cls = 'st' + (st.classic + st.ebikes === 0 ? ' empty' : '') + (sel ? ' sel' : '');
        const eb = st.ebikes ? `<span class="eb">${ic('bolt', 'bolt')}<span class="n">${st.ebikes}</span></span>` : '';
        const m = addPin(map, lngLat(STATIONS[i]), `<div class="${cls}"><span class="dot"></span>${ic('bike')}<span class="n">${st.classic}</span>${eb}</div>`);
        const el = m.getElement();
        if (sel) el.style.zIndex = 2;
        el.addEventListener('click', e => { e.stopPropagation(); this.openStation(i); });
        this.markers.push(m);
      }
    },

    openStation(i) {
      const s = STATIONS[i];
      const st = stationStats(i);
      this.selected = i;
      $('#stName').textContent = s[0];
      $('#stClassic').textContent = st.classic;
      $('#stEbikes').textContent = st.ebikes;
      $('#stDocks').textContent = st.docks;
      this.showCard('station');
      this.render();
      requestAnimationFrame(() => {
        this.map.resize();
        this.map.easeTo({ center: lngLat(s), duration: 400 });
      });
    },

    showCard(which) {
      $('#homeCard').hidden = which !== 'home';
      $('#stationCard').hidden = which !== 'station';
      $('#transitCard').hidden = which !== 'transit';
      $('#tabBike').classList.toggle('active', which !== 'transit');
      $('#tabTransit').classList.toggle('active', which === 'transit');
      if (which !== 'station' && this.selected !== null) {
        this.selected = null;
        this.render();
      }
    },

    renderTransit() {
      $('#transitList').innerHTML = TRANSIT.map(t => `
        <div class="transit">
          <div class="bullet" style="background:${t.color}">${esc(t.line)}</div>
          ${t.rows.map(([dir, eta]) => `<div class="transit-row"><span><b>${esc(dir)}</b></span><span>${esc(eta)}</span></div>`).join('')}
        </div>`).join('');
    },
  };

  // ---------- unlock flow ----------
  const nextReason = bag(REASONS);
  const Unlock = {
    timers: [],
    busy: false,
    el: $('#unlockOverlay'),
    sheet: $('#unlockSheet'),

    open(bike) {
      this.clear();
      bike = bike || randomBike();
      this.busy = true;
      this.el.hidden = false;
      this.sheet.innerHTML = `
        <div class="handle"></div>
        <div class="unlock-visual">
          <svg class="ring" viewBox="0 0 150 150"><circle class="track" cx="75" cy="75" r="70"/><circle class="prog" cx="75" cy="75" r="70"/></svg>
          <div class="bike-circle">${BIKE_ART}</div>
        </div>
        <div class="kicker">Unlocking</div>
        <h2>Bike ${esc(bike)}</h2>
        <p class="status" id="unlockStatus">${esc(UNLOCK_STEPS[0])}</p>`;
      UNLOCK_STEPS.forEach((step, k) => {
        if (k) this.timers.push(setTimeout(() => { $('#unlockStatus').textContent = step; }, k * 650));
      });
      this.timers.push(setTimeout(() => this.fail(bike), 2700));
    },

    fail(bike) {
      const r = nextReason();
      this.busy = false;
      this.sheet.innerHTML = `
        <button class="x-btn" id="unlockClose" aria-label="Close">${ic('close')}</button>
        <div class="handle"></div>
        <div class="fail-visual"><div class="bike-circle">${BIKE_ART}</div><span class="fail-badge">!</span></div>
        <span class="bike-pill">Bike ${esc(bike)}</span>
        <h2>${esc(r.t)}</h2>
        <p>${esc(r.b)}</p>
        <p class="code">ERROR CODE ${esc(r.c)}</p>
        ${TIP_BUTTON}
        <button class="btn-dark" id="retryBtn">Try another bike</button>
        <button class="btn-ghost" id="playBtn">${ic('game')}Play Find a Dock while you wait</button>
        <p class="fine">🎃 Halloween costume parody · not affiliated with Citi Bike or Lyft</p>`;
      this.sheet.scrollTop = 0;
      sfx.fail();
      buzz([40, 60, 40]);
      wireTips(this.sheet);
      $('#unlockClose').onclick = () => this.close();
      $('#retryBtn').onclick = () => this.open();
      $('#playBtn').onclick = () => { this.close(); go('game'); };
    },

    close() {
      this.clear();
      this.busy = false;
      this.el.hidden = true;
    },

    clear() {
      this.timers.forEach(clearTimeout);
      this.timers = [];
    },
  };
  $('#unlockOverlay .backdrop').onclick = () => { if (!Unlock.busy) Unlock.close(); };

  // ---------- tip (Zelle) ----------
  // Zelle only lives inside bank apps and has no payment link, so: copy the email, explain the rest.
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) { /* fall through */ }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, text.length);
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch (e) { return false; }
  }

  const Tip = {
    el: $('#tipOverlay'),
    sheet: $('#tipSheet'),

    open() {
      closeDrawer();
      audio();
      this.el.hidden = false;
      this.sheet.innerHTML = `
        <button class="x-btn" id="tipClose" aria-label="Close">${ic('close')}</button>
        <div class="handle"></div>
        <div class="tip-visual">${ic('tip')}</div>
        <div class="kicker">Tip your bike</div>
        <h2>Give a tip</h2>
        <p>This bike has carried the party all night. Tips go straight to the human inside the costume.</p>
        <div class="zelle-card">
          <div class="zelle-label">Send with Zelle to</div>
          <div class="zelle-email">${esc(TIP.zelle).replace('@', '<wbr>@')}</div>
          ${TIP.name ? `<div class="zelle-name">${esc(TIP.name)} · the one dressed as a Citi Bike</div>` : ''}
        </div>
        <button class="btn-tip" id="tipCopy">${ic('copy')}<span>Copy email</span></button>
        <ol class="tip-steps">
          <li><span>Open your bank app and tap <b>Zelle</b></span></li>
          <li><span>Tap <b>Send</b> and paste the email</span></li>
          <li><span>Pick any amount. $5 buys this bike a slice 🍕</span></li>
        </ol>
        <button class="btn-ghost" id="tipDone">Done</button>
        <p class="fine">Not affiliated with Zelle, Citi Bike, Lyft or Citi.</p>`;
      this.sheet.scrollTop = 0;
      $('#tipClose').onclick = () => this.close();
      $('#tipDone').onclick = () => this.close();
      $('#tipCopy').onclick = () => this.copy();
      // Opened by a tap, so the clipboard is allowed: save them a step.
      this.copy();
    },

    async copy() {
      const btn = $('#tipCopy');
      if (!btn) return;
      const ok = await copyText(TIP.zelle);
      if (!ok) {
        toast('Couldn\'t copy. Press and hold the email to copy it.');
        return;
      }
      btn.classList.add('done');
      btn.innerHTML = `${ic('check')}<span>Email copied</span>`;
      buzz(20);
    },

    close() { this.el.hidden = true; },
  };
  $('#tipOverlay .backdrop').onclick = () => Tip.close();

  const TIP_BUTTON = `<button class="btn-tip" data-tip>${ic('tip')}Give a tip<em>via Zelle</em></button>`;
  function wireTips(root = document) {
    $$('[data-tip]', root).forEach(b => { b.onclick = () => Tip.open(); });
  }

  // ---------- fake QR scanner ----------
  const Scanner = {
    el: $('#scanner'),
    timers: [],
    open() {
      audio();
      this.el.hidden = false;
      this.el.classList.remove('found');
      this.timers.push(setTimeout(() => {
        this.el.classList.add('found');
        buzz(30);
        this.timers.push(setTimeout(() => { this.close(); Unlock.open(); }, 450));
      }, 2200));
    },
    close() {
      this.timers.forEach(clearTimeout);
      this.timers = [];
      this.el.hidden = true;
    },
  };

  // ---------- drawer ----------
  const drawer = $('#drawer');
  const openDrawer = () => { drawer.hidden = false; };
  const closeDrawer = () => { drawer.hidden = true; };
  $('#drawer .backdrop').onclick = closeDrawer;
  $$('#drawer [data-go]').forEach(b => { b.onclick = () => { closeDrawer(); go(b.dataset.go); }; });
  $$('#drawer [data-toast]').forEach(b => { b.onclick = () => toast(TOASTS[b.dataset.toast]); });

  // ---------- minigame: Find a Dock ----------
  const Game = {
    map: null,
    layer: null,
    docks: [],
    free: -1,
    prevFree: -1,
    jumpedAt: 0,
    state: 'idle',
    score: 0,
    best: 0,
    misses: 0,
    t: 0,
    timeLeft: 0,
    nextJumpAt: 0,
    raf: 0,
    last: 0,

    enter() {
      if (!this.map) this.init();
      else this.map.resize();
      this.best = store.get('fad-best', 0);
      this.intro();
    },

    leave() {
      if (this.state === 'idle') return;
      this.stop();
      this.state = 'idle';
      this.hideSheet();
    },

    init() {
      const map = this.map = createMap('gameMap', { interactive: false });
      // pointerdown instead of click: the dock moves fast, so react on touch-down.
      map.getContainer().addEventListener('pointerdown', e => this.onTap(e), true);
      let rt;
      window.addEventListener('resize', () => {
        clearTimeout(rt);
        rt = setTimeout(() => {
          if (this.state === 'intro' || this.state === 'over') { map.resize(); this.placeDocks(); }
        }, 200);
      });
    },

    collect() {
      const map = this.map;
      const box = map.getContainer();
      const w = box.clientWidth;
      const top = $('#game .topbar').getBoundingClientRect().bottom - box.getBoundingClientRect().top + 50;
      const bottom = box.clientHeight - 30;
      const pts = [];
      STATIONS.forEach(s => {
        const pt = map.project(lngLat(s));
        if (pt.x < 38 || pt.x > w - 38 || pt.y < top || pt.y > bottom) return;
        if (pts.some(q => Math.abs(q.pt.x - pt.x) < 64 && Math.abs(q.pt.y - pt.y) < 50)) return;
        pts.push({ at: lngLat(s), pt });
      });
      return pts;
    },

    placeDocks() {
      const map = this.map;
      map.jumpTo({ center: CENTER, zoom: 15 });
      let pts = this.collect();
      if (pts.length < 12) {
        map.jumpTo({ center: CENTER, zoom: 14 });
        pts = this.collect();
      }
      this.docks.forEach(d => d.m.remove());
      this.docks = pts.map((p, k) => {
        const m = addPin(map, p.at, `<div class="dk full" data-k="${k}"><span class="dot"></span>${ic('dock')}<b>0</b></div>`);
        return { m, el: m.getElement().querySelector('.dk'), pt: p.pt, flash: 0 };
      });
      this.free = -1;
    },

    intro() {
      this.stop();
      this.state = 'intro';
      this.placeDocks();
      this.score = 0;
      this.misses = 0;
      this.t = 0;
      this.timeLeft = CONFIG.gameSeconds * 1000;
      $('#gameHint').textContent = 'Find an open dock';
      $('#gBike').textContent = randomBike();
      this.hud();
      const dockDemo = (cls, n) => `<span class="dk ${cls}"><span class="dot"></span>${ic('dock')}<b>${n}</b></span>`;
      this.showSheet(`
        <div class="handle"></div>
        <div class="kicker">Minigame</div>
        <h2>Find an open dock</h2>
        <p>Your ride is almost over and there's exactly <b>one</b> open dock in the neighborhood. It keeps jumping around. Tap it before it moves!</p>
        <div class="how">
          <div>${dockDemo('free', 1)}<span>Open dock: tap it, fast</span></div>
          <div>${dockDemo('full', 0)}<span>Full dock: costs you 2 seconds</span></div>
        </div>
        <button class="btn-dark" id="gStart">Start ride</button>
        ${this.best ? `<p class="fine">Your best: ${this.best} ${this.best === 1 ? 'dock' : 'docks'}</p>` : ''}`);
      $('#gStart').onclick = () => this.start();
    },

    start() {
      audio();
      this.hideSheet();
      this.stop();
      this.score = 0;
      this.misses = 0;
      this.t = 0;
      this.timeLeft = CONFIG.gameSeconds * 1000;
      $('#gBike').textContent = randomBike();
      $('#gameHint').textContent = '1 open dock nearby';
      this.docks.forEach(d => this.setDock(d, 'full'));
      this.free = -1;
      this.prevFree = -1;
      this.state = 'playing';
      this.moveFree();
      this.last = performance.now();
      const loop = now => {
        if (this.state !== 'playing') return;
        // Cap the step so time freezes while the tab is in the background.
        const dt = Math.min(now - this.last, 100);
        this.last = now;
        this.t += dt;
        this.timeLeft -= dt;
        if (this.t >= this.nextJumpAt) this.moveFree();
        this.hud();
        if (this.timeLeft <= 0) { this.end(); return; }
        this.raf = requestAnimationFrame(loop);
      };
      this.raf = requestAnimationFrame(loop);
    },

    stop() {
      cancelAnimationFrame(this.raf);
      this.docks.forEach(d => clearTimeout(d.flash));
    },

    interval() { return Math.max(520, 1500 - this.score * 65); },

    // Move the single open dock somewhere else (preferably not right next door).
    moveFree(keepLook = false) {
      const from = this.free;
      if (from >= 0 && !keepLook) {
        this.setDock(this.docks[from], 'full');
        this.prevFree = from;
        this.jumpedAt = this.t;
      }
      let cands = this.docks.map((_, k) => k).filter(k => k !== from);
      if (from >= 0) {
        const p = this.docks[from].pt;
        const far = cands.filter(k => Math.hypot(this.docks[k].pt.x - p.x, this.docks[k].pt.y - p.y) > 130);
        if (far.length) cands = far;
      }
      this.free = pick(cands);
      this.setDock(this.docks[this.free], 'free');
      this.nextJumpAt = this.t + this.interval();
    },

    setDock(d, state) {
      clearTimeout(d.flash);
      d.el.className = 'dk ' + state + (state === 'free' && this.score < 5 ? ' pulse' : '');
      d.el.querySelector('b').textContent = state === 'free' ? '1' : '0';
      d.m.getElement().style.zIndex = state === 'free' ? 5 : '';
    },

    flashDock(d, cls) {
      clearTimeout(d.flash);
      d.el.className = 'dk ' + cls;
      d.el.querySelector('b').textContent = cls === 'hit' ? '✓' : '0';
      d.flash = setTimeout(() => { if (this.docks[this.free] !== d) this.setDock(d, 'full'); }, 380);
    },

    float(d, text, bad) {
      const s = document.createElement('span');
      s.className = 'plus' + (bad ? ' bad' : '');
      s.textContent = text;
      d.el.parentNode.appendChild(s);
      setTimeout(() => s.remove(), 800);
    },

    onTap(e) {
      if (this.state !== 'playing') return;
      const el = e.target.closest('.dk');
      if (!el) return;
      e.preventDefault();
      e.stopPropagation();
      const d = this.docks[+el.dataset.k];
      if (!d) return;
      const isFree = d === this.docks[this.free];
      // Tapped the open dock just as it jumped away: still counts.
      const isLate = !isFree && d === this.docks[this.prevFree] && this.t - this.jumpedAt < 200;
      if (isFree || isLate) {
        this.prevFree = -1;
        if (isFree && this.score >= 3 && Math.random() < 0.1) {
          sfx.miss();
          this.float(d, 'Taken!', true);
          this.flashDock(d, 'miss');
          this.moveFree(true);
          toast(`Snatched! ${pick(SNATCHERS)} docked there first.`, { top: true, ms: 1600 });
          return;
        }
        this.score++;
        sfx.dock();
        buzz(15);
        this.float(d, '+1');
        this.flashDock(d, 'hit');
        if (isFree) this.moveFree(true);
        const sc = $('#gScore');
        sc.classList.remove('bump');
        void sc.offsetWidth;
        sc.classList.add('bump');
      } else {
        this.timeLeft -= 2000;
        this.misses++;
        sfx.miss();
        buzz(80);
        this.float(d, '−2s', true);
        this.flashDock(d, 'miss');
        toast(pick(MISS_LINES), { top: true, ms: 1400 });
      }
    },

    fee() { return 4.79 + (this.t / 1000) * 0.36 + this.misses * 1.5; },

    hud() {
      const s = Math.max(0, Math.ceil(this.timeLeft / 1000));
      const time = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
      const gTime = $('#gTime');
      if (gTime.textContent !== time) gTime.textContent = time;
      gTime.classList.toggle('low', this.state === 'playing' && s <= 5);
      $('#gFee').textContent = '$' + this.fee().toFixed(2);
      $('#gScore').textContent = this.score;
      $('#gBest').textContent = this.best ? `· best ${this.best}` : '';
    },

    end() {
      this.state = 'over';
      this.stop();
      if (this.free >= 0) this.setDock(this.docks[this.free], 'full');
      this.free = -1;
      this.timeLeft = 0;
      $('#gameHint').textContent = '0 open docks nearby';
      const newBest = this.score > this.best;
      if (newBest) { this.best = this.score; store.set('fad-best', this.score); }
      this.hud();
      const rank = RANKS.filter(r => this.score >= r[0]).pop();
      this.showSheet(`
        <div class="handle"></div>
        <div class="kicker">Ride ended</div>
        <div class="big-score">${this.score}</div>
        <p>${this.score === 1 ? 'dock found' : 'docks found'}</p>
        ${newBest && this.score > 0 ? '<span class="new-best">New personal best!</span>' : ''}
        <div class="rank"><b>${esc(rank[1])}</b><span>${esc(rank[2])}</span></div>
        <p class="code">TOTAL CHARGED $${this.fee().toFixed(2)} · LATE FEE WAIVED, IT'S HALLOWEEN</p>
        <button class="btn-dark" id="gAgain">${ic('replay')}Ride again</button>
        ${TIP_BUTTON}
        ${navigator.share ? `<button class="btn-ghost" id="gShare">${ic('share')}Share score</button>` : ''}
        <button class="btn-ghost" id="gHome">Back to map</button>
        <p class="fine">🎃 Halloween costume parody · not affiliated with Citi Bike or Lyft</p>`);
      wireTips($('#gameSheet'));
      $('#gAgain').onclick = () => this.start();
      $('#gHome').onclick = back;
      const share = $('#gShare');
      if (share) {
        share.onclick = () => {
          const n = this.score;
          navigator.share({
            title: 'Find a Dock',
            text: `I found ${n} open Citi Bike ${n === 1 ? 'dock' : 'docks'} in 30 seconds 🚲👻 Can you beat that?`,
            url: location.origin + location.pathname + '#/game',
          }).catch(() => {});
        };
      }
    },

    showSheet(html) {
      $('#gameOverlay').hidden = false;
      $('#gameSheet').innerHTML = html;
      $('#gameSheet').scrollTop = 0;
    },

    hideSheet() { $('#gameOverlay').hidden = true; },
  };

  // ---------- ride history ----------
  function renderHistory() {
    $('#historyList').innerHTML = HISTORY.map(h => `
      <div class="trip">
        <div class="trip-icon">${ic('bike')}</div>
        <div class="trip-main">
          <div class="trip-date">${esc(h.d)}</div>
          <div class="trip-route">${esc(h.from)}${h.to ? ` <span class="arrow">→</span> ${esc(h.to)}` : ''}</div>
          ${h.note ? `<div class="trip-note">${esc(h.note)}</div>` : ''}
        </div>
        ${h.cost ? `<div class="trip-cost">${esc(h.cost)}<span>${esc(h.dur)}</span></div>` : ''}
      </div>`).join('');
  }

  // ---------- routing ----------
  let navigatedInApp = false;
  function go(route) {
    navigatedInApp = true;
    location.hash = route === 'home' ? '#/' : '#/' + route;
  }
  function back() {
    if (navigatedInApp) history.back();
    else location.replace('#/');
  }
  function currentRoute() {
    return location.hash.replace(/^#\/?/, '') || 'home';
  }
  function route() {
    const r = currentRoute();
    $('#game').hidden = r !== 'game';
    $('#history').hidden = r !== 'history';
    if (r === 'game') Game.enter(); else Game.leave();
    if (r === 'history') renderHistory();
  }
  window.addEventListener('hashchange', route);

  // ---------- wire up ----------
  $('#menuBtn').onclick = openDrawer;
  $('#flagBtn').onclick = () => go('game');
  $('#searchBtn').onclick = () => toast(TOASTS.search, { top: true });
  $('#locateBtn').onclick = () => { Home.map.flyTo({ center: CENTER, zoom: 15, duration: 600 }); toast(TOASTS.locate); };
  $('#scanBtn').onclick = () => Scanner.open();
  $('#stUnlock').onclick = () => Unlock.open();
  $('#stationClose').onclick = () => Home.showCard('home');
  $('#priceInfo').onclick = () => toast(TOASTS.price);
  $('#tabBike').onclick = () => Home.showCard('home');
  $('#tabTransit').onclick = () => Home.showCard('transit');
  $('#scannerClose').onclick = () => Scanner.close();
  $('#scannerManual').onclick = () => toast(TOASTS.manual);
  $('#gameBack').onclick = back;
  $('#historyBack').onclick = back;
  wireTips();

  // ---------- boot ----------
  Home.init();
  const firstRoute = currentRoute();
  route();
  const minSplash = new Promise(res => setTimeout(res, 700));
  const maxSplash = new Promise(res => setTimeout(res, 2500));
  Promise.race([Promise.all([minSplash, Home.ready]), maxSplash]).then(() => {
    $('#splash').classList.add('out');
    setTimeout(() => $('#splash').remove(), 400);
    if (firstRoute === 'home') setTimeout(() => Unlock.open(urlBike || randomBike()), 250);
  });
})();
