var navbar = document.getElementById("navbarSupportedContent");
var toggler = document.querySelector(".navbar-toggler");
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
    // Collapse the navbar if it is expanded
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
});


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))