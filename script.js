/* ------------------------- VARIABLE DECLARATIONS ------------------------- */





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function toggleDropdownActive() {
  document.getElementById("dropdown-nav").classList.toggle("dropdown-active");
}





/* ----------------------------- EVENT HANDLERS ----------------------------- */
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("hamburger-menu").addEventListener("mousedown", function() {
    this.style.outlineWidth = "0";
  });

  document.getElementById("hamburger-menu").addEventListener("mouseup", function() {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  document.getElementById("hamburger-menu").addEventListener("mouseleave", function() {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  document.getElementById("hamburger-menu").addEventListener("click", function() {
    toggleDropdownActive();
  });

/* ----- */

  document.getElementById("shorten-submit").addEventListener("mousedown", function() {
    this.style.outlineWidth = "0";
  });

  document.getElementById("shorten-submit").addEventListener("mouseup", function() {
    this.blur();
    this.style.outlineWidth = "initial";
  });

  document.getElementById("shorten-submit").addEventListener("mouseleave", function() {
    this.blur();
    this.style.outlineWidth = "initial";
  });

});
