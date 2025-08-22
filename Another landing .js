document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const ctaBtn = document.querySelector("#cta-btn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      alert("Thank you for your interest! 🚀");
    });
  }
});