/* ------------------------- FUNCTION DECLARATIONS ------------------------- */
function initializeLocalStorage() {
  // localStorage.removeItem("shortlyLocalStorage");
  // console.log("SHORTLY LOCAL STORAGE CLEARED!");

  if(localStorage.getItem("shortlyLocalStorage") !== null) {
    for (i = JSON.parse(localStorage.getItem("shortlyLocalStorage")).length - 1; i >= 0; i--) {
      var shortenResultTile = document.createElement("DIV");
      shortenResultTile.classList.add("shorten-result-tile");

      var shortenResultTileInner = document.createElement("DIV");
      shortenResultTileInner.classList.add("shorten-result-tile-inner");
      shortenResultTile.appendChild(shortenResultTileInner);

      document.getElementById("shorten-results-container").prepend(shortenResultTile);

      let resultTileList = document.getElementsByClassName("shorten-result-tile");

      setTimeout(function() {
        for (i = resultTileList.length - 1; i >= 0; i--) {
          resultTileList[i].classList.add("shorten-result-tile-transition", "shorten-result-tile-expand");
        }
      },  0);

      setTimeout(function() {
        for (i = resultTileList.length - 1; i >= 0; i--) {
          resultTileList[i].classList.remove("shorten-result-tile-transition");
        }
      }, 300);

      createShortenResultOriginal( shortenResultTileInner, JSON.parse(localStorage.getItem("shortlyLocalStorage"))[i] );
      createShortenResultAccentLine( shortenResultTile, JSON.parse(localStorage.getItem("shortlyLocalStorage"))[i] );
      createShortenResultLinkContainer( shortenResultTileInner, JSON.parse(localStorage.getItem("shortlyLocalStorage"))[i] );
    }
  }
}


function toggleDropdownActive() {
  document.getElementById("dropdown-nav").classList.toggle("dropdown-active");
}


function createShortenResultTile(apiUrl) {
  var shortenResultTile = document.createElement("DIV");
  shortenResultTile.classList.add("shorten-result-tile");

  var shortenResultTileInner = document.createElement("DIV");
  shortenResultTileInner.classList.add("shorten-result-tile-inner");
  shortenResultTile.appendChild(shortenResultTileInner);

// --

  fetchApiData(shortenResultTile, shortenResultTileInner, apiUrl);

// --

  document.getElementById("shorten-results-container").prepend(shortenResultTile);

  setTimeout(function() {
    shortenResultTile.classList.add("shorten-result-tile-transition", "shorten-result-tile-expand");
  }, 0);

  setTimeout(function() {
    shortenResultTile.classList.remove("shorten-result-tile-transition");
  }, 300);

// --

  checkResultTileListLength();
}


function checkResultTileListLength() {
  let resultTileList = document.getElementsByClassName("shorten-result-tile");

  if(resultTileList.length > 5) {
    setTimeout(function() {
      resultTileList[5].remove();
    }, 600);
  }
}


function fetchApiData(shortenResultTile, shortenResultTileInner, apiUrl) {
  var shortenResultLoadingSpinner = document.createElement("DIV");
  shortenResultLoadingSpinner.classList.add("shorten-result-loading-spinner", "rotate-loading-spinner");

  shortenResultTileInner.appendChild(shortenResultLoadingSpinner);

  setTimeout(function() {
    shortenResultLoadingSpinner.classList.add("shorten-result-fade-in");
  }, 300);

// --

  let apiUrlEncoded = apiUrl.replace(/&/g, "%26");
  // console.log("encoded URL = " + apiUrlEncoded);

  fetch("https://api.shrtco.de/v2/shorten?url=" + apiUrlEncoded)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    // console.log("");

    shortenResultLoadingSpinner.classList.remove("shorten-result-fade-in");
    setTimeout(function() {
      shortenResultLoadingSpinner.classList.remove("rotate-loading-spinner");
      shortenResultLoadingSpinner.style.display = "none";
    }, 300);

    createShortenResultOriginal(shortenResultTileInner, data);
    createShortenResultAccentLine(shortenResultTile, data);
    createShortenResultLinkContainer(shortenResultTileInner, data);

    addResultToLocalStorage(data);
  })
  .catch(function(error) {
    console.log(error);
    console.log("");

    shortenResultLoadingSpinner.classList.remove("shorten-result-fade-in");
    setTimeout(function() {
      shortenResultLoadingSpinner.classList.remove("rotate-loading-spinner");
      shortenResultLoadingSpinner.style.display = "none";
    }, 300);

    createShortenResultOriginal(shortenResultTileInner);
    createShortenResultLinkContainer(shortenResultTileInner);
  });
}


function createShortenResultOriginal(shortenResultTileInner, data) {
  var shortenResultOriginal = document.createElement("P");
  shortenResultOriginal.classList.add("shorten-result-original");

  if(data && data.ok) {
    let lowerBaseUrl = new URL(data.result.original_link);
    shortenResultOriginal.appendChild(document.createTextNode( lowerBaseUrl.href.replace(/\/$/, "") ));
  }
  else {
    shortenResultOriginal.classList.add("shorten-result-original-error");
    shortenResultOriginal.appendChild( document.createTextNode("ERROR:") );
  }

  shortenResultTileInner.appendChild(shortenResultOriginal);

  setTimeout(function() {
    shortenResultOriginal.classList.add("shorten-result-fade-in");
  }, 300);
}


function createShortenResultAccentLine(shortenResultTile, data) {
  if(data && data.ok) {
    var shortenResultAccentLine = document.createElement("DIV");
    shortenResultAccentLine.classList.add("shorten-result-accent-line");
    shortenResultTile.appendChild(shortenResultAccentLine);

    setTimeout(function() {
      shortenResultAccentLine.classList.add("shorten-result-fade-in");
    }, 300);
  }
}


function createShortenResultLinkContainer(shortenResultTileInner, data) {
  var shortenResultLinkContainer = document.createElement("DIV");
  shortenResultLinkContainer.classList.add("shorten-result-link-container");
  shortenResultTileInner.appendChild(shortenResultLinkContainer);

// --

  if(data && data.ok) {
    var shortenResultLinkContainerInner = document.createElement("DIV");
    shortenResultLinkContainerInner.classList.add("shorten-result-link-container-inner");
    shortenResultLinkContainer.appendChild(shortenResultLinkContainerInner);

    var shortenResultLink = document.createElement("A");
    shortenResultLink.href = data.result.full_short_link;
    shortenResultLink.setAttribute("target", "_blank");
    shortenResultLink.classList.add("shorten-result-link");
    shortenResultLink.appendChild( document.createTextNode(data.result.full_short_link) );
    shortenResultLinkContainerInner.appendChild(shortenResultLink);

    var shortenResultCopyBtn = document.createElement("BUTTON");
    shortenResultCopyBtn.classList.add("shorten-result-copy-btn", "copy-btn-default");
    shortenResultCopyBtn.appendChild( document.createTextNode("Copy") );

// --

    shortenResultCopyBtn.addEventListener("mousedown", function() {
      this.style.outlineWidth = "0";
    });

    shortenResultCopyBtn.addEventListener("mouseup", function() {
      this.blur();
      this.style.outlineWidth = "initial";
    });

    shortenResultCopyBtn.addEventListener("mouseleave", function() {
      this.blur();
      this.style.outlineWidth = "initial";
    });

    shortenResultCopyBtn.addEventListener("click", function() {
      copyShortenedLink(this);
    });

    shortenResultLinkContainer.appendChild(shortenResultCopyBtn);
  }
  else {
    var shortenResultLinkErrorContainerInner = document.createElement("DIV");
    shortenResultLinkErrorContainerInner.classList.add("shorten-result-link-error-container-inner");
    shortenResultLinkContainer.appendChild(shortenResultLinkErrorContainerInner);

    var shortenResultLinkError = document.createElement("P");
    shortenResultLinkError.classList.add("shorten-result-link", "shorten-result-link-error");

    if(data && data.error) {
      shortenResultLinkError.appendChild( document.createTextNode(data.error) );
    }
    else {
      shortenResultLinkError.appendChild( document.createTextNode("A network error has occurred, please try again later") );
    }

    shortenResultLinkErrorContainerInner.appendChild(shortenResultLinkError);
  }

// --

  setTimeout(function() {
    shortenResultLinkContainer.classList.add("shorten-result-fade-in");
  }, 300);
}


function addResultToLocalStorage(data) {
  if(data && data.ok) {
    if(localStorage.getItem("shortlyLocalStorage") === null) {
      let emptyArr = [];
      localStorage.setItem( "shortlyLocalStorage", JSON.stringify(emptyArr) );
    }

    let shortlyLocalStorageNew = JSON.parse(localStorage.getItem("shortlyLocalStorage"));

    let newData = {
      ok: true,
      result: {
        original_link: data.result.original_link,
        full_short_link: data.result.full_short_link
      }
    }

    shortlyLocalStorageNew.unshift(newData);

    if( JSON.parse(localStorage.getItem("shortlyLocalStorage")).length >= 5 ) {
      shortlyLocalStorageNew.pop();
    }

    localStorage.setItem("shortlyLocalStorage", JSON.stringify(shortlyLocalStorageNew));
  }
}


function checkValidUrl(str) {
  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;

  if(regexp.test(str)) {
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


function copyShortenedLink(btn) {
  if(btn.classList.contains("copy-btn-copied") === false) {
    let copyBtnClassList = document.getElementsByClassName("shorten-result-copy-btn");

    for (i = 0; i < copyBtnClassList.length; i++) {
      copyBtnClassList[i].classList.remove("copy-btn-copied");
      copyBtnClassList[i].classList.add("copy-btn-default");
      copyBtnClassList[i].innerHTML = "Copy";
    }

    btn.classList.remove("copy-btn-default");
    btn.classList.add("copy-btn-copied");
    btn.innerHTML = "Copied!";
  }

  var tempInput = document.createElement("INPUT");
  tempInput.value = btn.previousSibling.children[0].innerHTML;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}





/* ----------------------------- EVENT HANDLERS ----------------------------- */
document.addEventListener("DOMContentLoaded", function() {
  initializeLocalStorage();

/* ----- */

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
    // console.log( "valid URL = " + checkValidUrl(document.getElementById("shorten-input").value) );

    if(checkValidUrl(document.getElementById("shorten-input").value) === true) {
      createShortenResultTile(document.getElementById("shorten-input").value);

      validUrlPass();
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
