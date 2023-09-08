function toggleMenu() {
  // 1. Targetting these elements
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  // 2. When it's clicked
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
