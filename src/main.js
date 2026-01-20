const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
let isOpen = false;


hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  isOpen = !isOpen;

  if (isOpen) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("mobile-menu-show");
    hamburgerBtn.innerHTML =
      '<img src="./assets/images/svg/close-burger.svg" alt="menu" class="w-7 h-7">';
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("mobile-menu-show");
    hamburgerBtn.innerHTML =
      '<img src="./assets/images/svg/hamburger-nav.svg" alt="menu" class="w-7 h-7">';
  }
});


window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("mobile-menu-show");
    isOpen = false;
  }
});
