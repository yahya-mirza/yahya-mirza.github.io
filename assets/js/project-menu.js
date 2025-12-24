  const projectToggle = document.querySelector(".project-menu-toggle");
  const projectDropdown = document.querySelector(".project-dropdown");

  if (projectToggle) {
    projectToggle.addEventListener("click", () => {
      projectDropdown.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!projectToggle.contains(e.target) && !projectDropdown.contains(e.target)) {
        projectDropdown.classList.remove("open");
      }
    });
  }
