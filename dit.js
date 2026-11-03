"use strict";
// DIT story page: the stage takes turns between AIOudit's DIT (reading a page) and VIDEOudit's DIT (listening to a video),
// saying the lines it says on the real progress screens; the faces grid switches between the two palettes.
(() => {
  const stage = document.querySelector('[data-dit-stage]');
  if (stage) {
    const lines = JSON.parse(stage.querySelector('script[type="application/json"]').textContent);
    const say = stage.querySelector('[data-dit-line]'), tag = stage.querySelector('[data-dit-tag]');
    const art = { aio: stage.querySelector('[data-dit-art="aio"]'), video: stage.querySelector('[data-dit-art="video"]') };
    const toggle = stage.querySelector('[data-dit-toggle]'), next = stage.querySelector('[data-dit-next]');
    const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let index = 0, timer = null, paused = still;
    const show = i => {
      index = (i + lines.length) % lines.length;
      const line = lines[index];
      stage.classList.toggle('is-video', line.svc === 'video');
      art.aio.hidden = line.svc !== 'aio'; art.video.hidden = line.svc !== 'video';
      tag.textContent = line.svc === 'video' ? 'VIDEOudit' : 'AIOudit';
      say.textContent = line.text;
    };
    const run = () => { clearInterval(timer); timer = paused ? null : setInterval(() => show(index + 1), 3600); toggle.textContent = paused ? '재생' : '멈춤'; toggle.setAttribute('aria-pressed', String(paused)); };
    toggle.addEventListener('click', () => { paused = !paused; run(); });
    next.addEventListener('click', () => { show(index + 1); if (!paused) run(); });
    stage.addEventListener('mouseenter', () => { if (!paused) clearInterval(timer); });
    stage.addEventListener('mouseleave', () => { if (!paused) run(); });
    show(0); run();
  }
  const faces = document.querySelector('[data-dit-faces]');
  if (faces) {
    const buttons = document.querySelectorAll('[data-palette]');
    buttons.forEach(button => button.addEventListener('click', () => {
      const palette = button.dataset.palette;
      buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      faces.classList.toggle('is-video', palette === 'video');
      faces.querySelectorAll('img[data-face]').forEach(img => { img.src = `../assets/dit/dit-${palette}-${img.dataset.face}.svg`; });
    }));
  }
})();
