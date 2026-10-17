"use strict";
(() => {
  const dialog = document.querySelector('.screen-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const image = dialog.querySelector('.dialog-image');
  const zoom = dialog.querySelector('.zoom-toggle');
  const area = dialog.querySelector('.dialog-image-area');
  let opener;
  document.querySelectorAll('[data-screen-preview]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      dialog.querySelector('#preview-title').textContent = link.dataset.previewTitle || link.querySelector('.screen-bar > span').textContent.trim();
      image.onload = () => area.style.setProperty('--preview-width', Math.max(image.naturalWidth, 827) + 'px');
      if (image.complete) area.style.setProperty('--preview-width', Math.max(image.naturalWidth, 827) + 'px');
      dialog.showModal();
      document.documentElement.classList.add('preview-open');
    });
  });
  zoom.addEventListener('click', () => {
    const expanded = zoom.getAttribute('aria-pressed') !== 'true';
    zoom.setAttribute('aria-pressed', String(expanded));
    zoom.textContent = expanded ? '화면에 맞추기' : '원본 크기로 확대';
    area.classList.toggle('is-zoomed', expanded);
    area.scrollTo(0, 0);
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('preview-open');
    area.classList.remove('is-zoomed');
    zoom.setAttribute('aria-pressed', 'false');
    zoom.textContent = '원본 크기로 확대';
    area.scrollTo(0, 0);
    opener?.focus({preventScroll:true});
  });
})();
