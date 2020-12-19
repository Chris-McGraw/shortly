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

// --

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

  var shortenResultLinkContainerInner = document.createElement("DIV");
  shortenResultLinkContainerInner.classList.add("shorten-result-link-container-inner");
  shortenResultLinkContainer.appendChild(shortenResultLinkContainerInner);

  var shortenResultLink = document.createElement("A");
  shortenResultLink.href = "https://rel.ink/k4IKyk";
  shortenResultLink.setAttribute("target", "_blank");
  shortenResultLink.classList.add("shorten-result-link");
  shortenResultLink.appendChild( document.createTextNode("https://rel.ink/k4IKyk") );
  shortenResultLinkContainerInner.appendChild(shortenResultLink);

  var shortenResultCopyBtn = document.createElement("BUTTON");
  shortenResultCopyBtn.classList.add("shorten-result-copy-btn");
  shortenResultCopyBtn.appendChild( document.createTextNode("Copy") );
  shortenResultLinkContainer.appendChild(shortenResultCopyBtn);

// --

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


function checkValidUrl(str) {
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

  if (regexp.test(str)) {
    return true
  }
  else {
    return false;
  }
}


function validUrlPass() {
  document.getElementById("shorten").classList.remove("shorten-link-error-shorten-expand");
  document.getElementById("shorten-input").value = "";
  document.getElementById("shorten-input").style.boxShadow = "none";
  document.getElementById("shorten-link-error").classList.remove("shorten-link-error-display");

  document.getElementById("stats").classList.remove("shorten-link-error-stats-expand");
}


function validUrlFail() {
  document.getElementById("shorten").classList.add("shorten-link-error-shorten-expand");
  document.getElementById("shorten-input").style.boxShadow = "0 0 0 3px hsl(0, 87%, 67%) inset";
  document.getElementById("shorten-link-error").classList.add("shorten-link-error-display");

  document.getElementById("stats").classList.add("shorten-link-error-stats-expand");
}


// function apiTest() {
//   fetch("https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html")
//   .then(response => response.json())
//   .then(data => console.log(data));
// }





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
    console.log( checkValidUrl(document.getElementById("shorten-input").value) );

    if(checkValidUrl(document.getElementById("shorten-input").value) === true) {
      validUrlPass();

      // apiTest();

      createShortenResultTile();
    }
    else {
      validUrlFail();
    }
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
