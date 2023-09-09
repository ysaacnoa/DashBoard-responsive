/* ============================ SHOW SIDEBAR ============================== */
const showSidebar = (toggleId, sidebarId, mainId) => {
  const toggle = document.getElementById(toggleId),
    sidebar = document.getElementById(sidebarId),
    main = document.getElementById(mainId);

  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      /* show sidebar */
      sidebar.classList.toggle('show-sidebar');
      /* Add padding Main */
			main.classList.toggle('main-pd')
    });
  }
};

showSidebar('header-toggle', 'sidebar','main');

/* ============================ LINK ACTIVE ============================= */

const sidebarLink = document.querySelectorAll('.sidebar__link');

function linkColor() {
  sidebarLink.forEach((l) => l.classList.remove('active-link'));
  this.classList.add('active-link');
}

sidebarLink.forEach((l) => l.addEventListener('click', linkColor));
