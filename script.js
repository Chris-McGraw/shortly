/* ------------------------- VARIABLE DECLARATIONS ------------------------- */





/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function toggleDropdownActive() {
  document.getElementById("dropdown-nav").classList.toggle("dropdown-active");
}

function createShortenResultTile() {
  var shortenResultTile = document.createElement("DIV");
  shortenResultTile.classList.add("shorten-result-tile");

  var shortenResultTileInner = document.createElement("DIV");
  shortenResultTileInner.classList.add("shorten-result-tile-inner");
  shortenResultTile.appendChild(shortenResultTileInner);



  var shortenResultOriginal = document.createElement("P");
  shortenResultOriginal.classList.add("shorten-result-original");
  shortenResultOriginal.appendChild( document.createTextNode("https://www.frontendmentor.io") );
  shortenResultTileInner.appendChild(shortenResultOriginal);

  var shortenResultAccentLine = document.createElement("DIV");
  shortenResultAccentLine.classList.add("shorten-result-accent-line");
  shortenResultTile.appendChild(shortenResultAccentLine);

  var shortenResultLinkContainer = document.createElement("DIV");
  shortenResultLinkContainer.classList.add("shorten-result-link-container");
  shortenResultTileInner.appendChild(shortenResultLinkContainer);

  var shortenResultLink = document.createElement("A");
  shortenResultLink.href = "https://rel.ink/k4IKyk";
  shortenResultLink.setAttribute("target", "_blank");
  shortenResultLink.classList.add("shorten-result-link");
  shortenResultLink.appendChild( document.createTextNode("https://rel.ink/k4IKyk") );
  shortenResultLinkContainer.appendChild(shortenResultLink);

  var shortenResultCopyBtn = document.createElement("BUTTON");
  shortenResultCopyBtn.classList.add("shorten-result-copy-btn");
  shortenResultCopyBtn.appendChild( document.createTextNode("Copy") );
  shortenResultLinkContainer.appendChild(shortenResultCopyBtn);



  document.getElementById("shorten-results-container").prepend(shortenResultTile);

  setTimeout(function() {
    shortenResultTile.classList.add("shorten-result-tile-transition", "shorten-result-tile-expand");
  }, 0);

  setTimeout(function() {
    shortenResultTile.classList.remove("shorten-result-tile-transition");

    shortenResultTileInner.classList.add("shorten-result-tile-expand");
    shortenResultAccentLine.classList.add("shorten-result-tile-expand");
  }, 300);
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

  document.getElementById("shorten-submit").addEventListener("click", function() {
    createShortenResultTile();
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
