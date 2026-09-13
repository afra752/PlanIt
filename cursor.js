const glow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Make it grow slightly over clickable things, for a nice interactive feel
document.addEventListener("mouseover", (e) => {
  if (e.target.closest("a, button, .course-card, .choice-card")) {
    glow.style.transform = "translate(-50%, -50%) scale(1.8)";
  }
});
document.addEventListener("mouseout", (e) => {
  if (e.target.closest("a, button, .course-card, .choice-card")) {
    glow.style.transform = "translate(-50%, -50%) scale(1)";
  }
});