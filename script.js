function scrollHome() {
  var targetElement = document.querySelector('.intro');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'center'});
  }
}
function scrollAbout() {
  var targetElement = document.querySelector('.lorem');
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