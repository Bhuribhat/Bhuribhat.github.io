function toggleMenu() {
  const menu = document.querySelector(".nav-links");
  const toggle = document.querySelector(".nav-toggle");
  const isOpen = menu.classList.toggle("open");

  if (toggle) {
    toggle.setAttribute("aria-expanded", String(isOpen));
  }
}

const revealTargets = document.querySelectorAll("[data-reveal]");

revealTargets.forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 350)}ms`);
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}
