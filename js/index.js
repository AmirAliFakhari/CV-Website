
  // Get the navbar element
var navbar = document.getElementById("navbarSupportedContent");
console.log(navbar)
// Get the toggler button
var toggler = document.querySelector(".navbar-toggler");
console.log(toggler)
// Add an event listener to the document
document.addEventListener("click", function(event) {
  // Check if the target element is not inside the navbar or the toggler button
  if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
    // Collapse the navbar if it is expanded
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
});
