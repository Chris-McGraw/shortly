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

/* ----- */
  document.getElementById("facebook-link").addEventListener("mouseenter", function() {
    this.children[0].src = "imgs/icon-facebook-cyan.svg";
  });

  document.getElementById("facebook-link").addEventListener("mouseleave", function() {
    this.children[0].src = "imgs/icon-facebook-white.svg";
  });

// --

  document.getElementById("twitter-link").addEventListener("mouseenter", function() {
    this.children[0].src = "imgs/icon-twitter-cyan.svg";
  });

  document.getElementById("twitter-link").addEventListener("mouseleave", function() {
    this.children[0].src = "imgs/icon-twitter-white.svg";
  });

// --

  document.getElementById("pinterest-link").addEventListener("mouseenter", function() {
    this.children[0].src = "imgs/icon-pinterest-cyan.svg";
  });

  document.getElementById("pinterest-link").addEventListener("mouseleave", function() {
    this.children[0].src = "imgs/icon-pinterest-white.svg";
  });

// --

  document.getElementById("instagram-link").addEventListener("mouseenter", function() {
    this.children[0].src = "imgs/icon-instagram-cyan.svg";
  });

  document.getElementById("instagram-link").addEventListener("mouseleave", function() {
    this.children[0].src = "imgs/icon-instagram-white.svg";
  });

});
