var imageContainer = document.getElementById('image-container');
var image = imageContainer.querySelector('img');
var isInViewport = false;

function checkVisibility() {
  var rect = imageContainer.getBoundingClientRect();
  isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
}

function fadeOutImage() {
  image.style.opacity = '0';
}

window.addEventListener('scroll', function() {
  checkVisibility();
  
  if (isInViewport) {
    fadeOutImage();
  }
});

// Check visibility on page load
window.addEventListener('load', function() {
  checkVisibility();
});
