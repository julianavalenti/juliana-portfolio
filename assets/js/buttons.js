function loadPage1() {
    document.getElementById('about-me-content').innerHTML = '<div id="text-container">' +
        '<img class="about-me-avatar" src="assets/img/IMG_3416.JPG" alt="">' +
        '<div class="about-me-text">' +
        '<h2 class="about-me-h2">ABOUT ME</h2>' +
        '<p class="about-me-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt veniam at officia aspernatur minus enim, quae itaque accusantium deleniti nobis quidem, velit adipisci voluptatum sit rerum obcaecati pariatur ipsum aliquid?</p>' +
        '</div>' +
        '</div>';
}

function loadPage2() {
    document.getElementById('about-me-content').innerHTML = '<p>This is Page 2 content.</p>';
}
