document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdown = document.querySelector(".dropdown");
  const submenuToggle = document.querySelector(".submenu-toggle");
  const submenu = document.querySelector(".submenu");

  // Make sure dropdown starts closed
  dropdown.classList.remove("open");
  if(submenu) submenu.classList.remove("open");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = dropdown.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  if (submenuToggle && submenu) {
    submenuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = submenu.classList.toggle("open");
      submenuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      dropdown.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      if(submenu) {
        submenu.classList.remove("open");
        submenuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});
