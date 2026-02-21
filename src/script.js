const openBtn = document.querySelector("[data-mobile-open]");
const closeBtn = document.querySelector("[data-mobile-close]");
const menuBar = document.querySelector("[data-mobile-menu]");

const toggleMenu = (isOpen) => {
  if (isOpen) {
    menuBar.classList.remove("opacity-0", "pointer-events-none");
    menuBar.classList.add("opacity-100", "pointer-events-all");
  } else {
    menuBar.classList.remove("opacity-100", "pointer-events-all");
    menuBar.classList.add("opacity-0", "pointer-events-none");
  }
};

openBtn.addEventListener("click", () => toggleMenu(true));
closeBtn.addEventListener("click", () => toggleMenu(false));
