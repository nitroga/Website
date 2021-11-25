// a key map of allowed keys
var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  // the 'official' Konami Code sequence
  var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;
  
  // add keydown event listener
  document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];
  
    // compare the key with the required key
    if (key == requiredKey) {
  
      // move to the next key in the konami code sequence
      konamiCodePosition++;
  
      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function activateCheats() { 
    window.location.href = 'admin.html';
  }

let menuIsOpen = true;

function toggleNav() {
  menuIsOpen = !menuIsOpen;

  if (menuIsOpen) {
    document.querySelector(".menuButton").innerHTML = "Close";
  } else {
    document.querySelector(".menuButton").innerHTML = "Menu";
  }

  document.querySelector("#navigation").classList.toggle("height-zero");

  document.querySelector(".menuButton").classList.toggle("menuButton-top");

  if (document.URL.indexOf("index") > -1) {
  document.querySelector(".main").classList.toggle("mainContent-height");
  document.querySelector(".shop").classList.toggle("mainContent-height");
  document.querySelector(".updates").classList.toggle("mainContent-height");
  document.querySelector(".projects").classList.toggle("mainContent-height");
  }
  
  else if (document.URL.indexOf("projects") > -1 || document.URL.indexOf("shop") > -1) {
    document.querySelector(".main1").classList.toggle("mainContent-height");
  }  

  let home = document.querySelector("#home");
  home.classList.toggle("hidden");

  let defaultElements = document.querySelectorAll(".default");
  defaultElements.forEach(element => {
    element.classList.toggle("hidden");
  });
}