var navbar = document.getElementById("navbarSupportedContent");
console.log(navbar)
var toggler = document.querySelector(".navbar-toggler");
console.log(toggler)
document.addEventListener("click", function (event) {
  if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
    // Collapse the navbar if it is expanded
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
});
