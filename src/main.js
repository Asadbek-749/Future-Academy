const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

let isOpen = false;

hamburgerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  isOpen = !isOpen;

  if (isOpen) {
    // Menu ochish
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.remove("hide");
    mobileMenu.classList.add("show");
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    // Menu yopish
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");

    // Animatsiya tugagandan keyin hidden qo'shish
    setTimeout(() => {
      if (!isOpen) {
        mobileMenu.classList.add("hidden");
      }
    }, 300);
  }
});

// Window resize bo'lganda
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("show", "hide");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
    isOpen = false;
  }
});

// Menyu tashqarisiga bosilganda yopish
document.addEventListener("click", (e) => {
  if (
    isOpen &&
    !mobileMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    isOpen = false;
    mobileMenu.classList.remove("show");
    mobileMenu.classList.add("hide");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");

    setTimeout(() => {
      if (!isOpen) {
        mobileMenu.classList.add("hidden");
      }
    }, 300);
  }
});

// Smooth scroll uchun
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});
