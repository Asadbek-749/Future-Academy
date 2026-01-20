// Element'larni olish
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Hamburger tugmasini bosish
hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");

  // Animatsiya qo'shish
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.style.animation = "slideDown 0.3s ease-out";
  }
});

// Ekrandan tashqariga bosilganda menu yopilsin
document.addEventListener("click", (e) => {
  if (!hamburgerBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.add("hidden");
  }
});

// Ekran kattalashganda mobil menu yopilsin
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobileMenu.classList.add("hidden");
  }
});

// Mobile menu ichidagi link'larga bosilganda menu yopilsin
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
