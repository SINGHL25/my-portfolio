// Scroll to top on page load
window.onload = function () {
  window.scrollTo(0, 0);
};

// Add click alert to project links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".project a");
  links.forEach(link => {
    link.addEventListener("click", function () {
      alert("You are now leaving the portfolio to view this project on GitHub.");
    });
  });
});
