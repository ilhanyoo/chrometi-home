"use strict";
(() => {
  const buttons = [...document.querySelectorAll('.report-tab')];
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelectorAll('[data-report-panel]').forEach(panel => {
        panel.hidden = panel.id !== button.dataset.panel;
      });
    });
  });
})();
