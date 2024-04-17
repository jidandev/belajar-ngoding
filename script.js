function scrollHome() {
  var targetElement = document.querySelector('.intro');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}
function scrollAbout() {
  var targetElement = document.querySelector('.isilorem');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}
function scrollSkill() {
  var targetElement = document.querySelector('.htmlicon');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}

function toggleNav() {
  var overlay = document.getElementById("myNav");
  if (overlay.style.width === "100%") {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function homeNav() {
  var targetElement = document.querySelector('.intro');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
    closeNav();
  }
}
function aboutNav() {
  var targetElement = document.querySelector('.isilorem');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
    closeNav();
  }
}
function skillNav() {
  var targetElement = document.querySelector('.htmlicon');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
    closeNav();
  }
}
