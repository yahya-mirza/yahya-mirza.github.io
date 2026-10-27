// Shared dropdown navigation for the Triton Baja overview and subsection pages.
(() => {
  const button = document.querySelector('.project-menu-toggle');
  const dropdown = document.querySelector('.project-dropdown');
  if (!button || !dropdown) return;

  const closeMenu = () => {
    dropdown.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
  };

  button.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.project-menu')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      button.focus();
    }
  });
})();
