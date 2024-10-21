// nav.js

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("data-scroll-to");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error(`Element with id ${targetId} not found`);
      }
    });
  });
});
