
// JavaScript
const fadeImage = document.getElementById('fade-image');
const textContainer = document.getElementById('text-container');

fadeImage.addEventListener('mouseenter', () => {
  fadeImage.style.opacity = 0;
  textContainer.classList.add('show');
});
