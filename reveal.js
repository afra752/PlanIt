// Watches elements with class "reveal" and adds "visible" once they scroll into view
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal, .reveal-slow").forEach(el => revealObserver.observe(el));