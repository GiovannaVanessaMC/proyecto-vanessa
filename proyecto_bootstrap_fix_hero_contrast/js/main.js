// Tema Bootstrap con botón accesible (texto dinámico y persistencia)
(function initTheme() {
  const saved = localStorage.getItem('bs-theme');
  const theme = saved === 'dark' ? 'dark' : 'light'; // por defecto, claro
  document.documentElement.setAttribute('data-bs-theme', theme);
  const btn = document.getElementById('themeBtn');
  if (btn) updateBtn(theme, btn);
})();

function updateBtn(theme, btn) {
  if (!btn) return;
  const next = theme === 'light' ? 'Oscuro' : 'Claro';
  btn.textContent = 'Cambiar tema';
  btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  btn.setAttribute('data-next', next);
  // Indicador visual (sr-only)
  const live = document.getElementById('themeState');
  if (live) live.textContent = theme === 'light' ? 'Tema claro activo' : 'Tema oscuro activo';
}

function toggleTheme() {
  const el = document.documentElement;
  const current = el.getAttribute('data-bs-theme') || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  el.setAttribute('data-bs-theme', next);
  localStorage.setItem('bs-theme', next);
  const btn = document.getElementById('themeBtn');
  updateBtn(next, btn);
}
