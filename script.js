// Run everything AFTER page loads
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Typing Effect
  // =========================
  const text = "Hi, I'm Prasad Tatapudi 👋";
  let i = 0;
  const typingElement = document.getElementById("typing");

  function typing() {
    if (typingElement && i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 60);
    }
  }
  typing();


  // =========================
  // Scroll Animation
  // =========================
  const sections = document.querySelectorAll("section:not(.hero)");

  function revealSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;

      if (top < trigger) {
        section.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealSections);

  // 🔥 VERY IMPORTANT (Fix blank page)
  revealSections();


  // =========================
  // Resume Popup
  // =========================
  window.openResume = function () {
    document.getElementById("resumeModal").style.display = "block";
  };

  window.closeResume = function () {
    document.getElementById("resumeModal").style.display = "none";
  };

});