const openBtn = document.querySelector("[data-mobile-open]");
const closeBtn = document.querySelector("[data-mobile-close]");
const menuBar = document.querySelector("[data-mobile-menu]");
const body = document.querySelector("body");
const toggleMenu = (isOpen) => {
  if (isOpen) {
    menuBar.classList.remove("opacity-0", "pointer-events-none");
    menuBar.classList.add("opacity-100", "pointer-events-all");
    body.style.overflow = "hidden";
  } else {
    menuBar.classList.remove("opacity-100", "pointer-events-all");
    menuBar.classList.add("opacity-0", "pointer-events-none");
    body.style.overflow = "auto";
  }
};

openBtn.addEventListener("click", () => toggleMenu(true));
closeBtn.addEventListener("click", () => toggleMenu(false));
