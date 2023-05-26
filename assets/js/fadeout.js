const fadeImage = document.getElementById('fade-image');
const textContainer = document.getElementById('text-container');

// Function to check if an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  if (isElementInViewport(textContainer)) {
    fadeImage.style.opacity = 0;
    textContainer.classList.add('show');
    // Remove the scroll event listener once the effect is applied
    window.removeEventListener('scroll', handleScroll);
  }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Check if the "about-me" section is already in the viewport on page load
if (isElementInViewport(textContainer)) {
  handleScroll();
}
