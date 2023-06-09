function loadPage1() {
    document.getElementById('about-me').innerHTML = '<div id="text-container">' +

        '<img class="about-me-avatar" src="assets/img/IMG_3416.JPG" alt="">' +

        '<div class="about-me-text">' +

        '<h2 class="about-me-h2">ABOUT ME</h2>' +

        '<p class="about-me-p">I hold a bachelor\'s degree in psychology, with a strong foundation in neuroscience. Alongside my studies, I gained valuable experience as a student assistant, contributing to research projects and expanding my knowledge. Building on this academic success, I ventured into the field as a school psychologist, where I had the privilege of supporting and collaborating with over 360 students, as well as a dedicated team of 50+ teachers and staff.</p>' +

        

        '<p class="about-me-p">When I moved to the United States, I made the bold decision to transform my hobby of photography into a profession. Recognizing the power of visual storytelling and the ability to capture profound moments, I seized the opportunity and established my own photography business.</p>' +

        

        '<p class="about-me-p">However, my journey did not stop there. As I settled into my new home, I felt a deep yearning for personal growth and professional development. It was during this transformative phase that I discovered my fascination with software engineering—a field that intrigued me with its boundless possibilities and potential to impact lives.</p>' +

        

        '<p class="about-me-p">Motivated by my innate curiosity and driven by a thirst for knowledge, I delved into the world of software engineering. With each line of code I write, I embrace the opportunity to create innovative solutions and shape the digital landscape. My background as a psychologist empowers me to approach software engineering with a unique perspective, combining analytical thinking, empathy, and creativity.</p>' +

        

        '<p class="about-me-p">As I continue to expand my horizons in this ever-evolving field, I am dedicated to pushing the boundaries of what is possible, leveraging technology to make a positive impact on individuals and society as a whole. Through the fusion of psychology, photography, and software engineering, I aim to create meaningful experiences and drive transformative change.</p>' +

        
        
        '<div class="centered-buttons">' + 
        
        '<button class="about-me-btn" onclick="loadPage2()">Cultural Experience</button>' +
        
        '<button class="about-me-btn" onclick="loadPage3()">Back to About Me </button>' + 

        '</div>' +

        '</div>' +

        '</div>';
}

function loadPage2() {
    document.getElementById('about-me').innerHTML = '<div id="text-container">' +

        

        '<img class="about-me-avatar" src="assets/img/IMG_3491.JPG" alt="">' +

        '<img class="about-me-avatar" src="assets/img/IMG_3493.JPG" alt="">' +

        '<div class="about-me-text">' +

        '<h2 class="about-me-h2">Cultural Experience</h2>' +

        '<p class="about-me-p">Since embarking on my journey as an immigrant and embracing the challenge of learning English from scratch, I have discovered a remarkable joy in adapting to new cultures. From a young age, I had the incredible opportunity to explore vibrant destinations with diverse cultures, immersing myself in the richness of different tribes, civilizations, customs, and histories. These awe-inspiring experiences have not only shaped my worldview but have also ignited a deep appreciation for the magic of multicultural environments.</p>'+


        '<p class="about-me-p"> Wholeheartedly, I champion the cause of multiculturalism, a philosophy that radiates warmth and inclusivity. It celebrates the myriad perspectives and unique contributions of individuals from all walks of life, fostering an atmosphere of mutual respect for our beautiful differences. Rather than imposing assimilation into a dominant culture, I firmly believe in the power of celebrating the kaleidoscope of voices that collectively form our society. In these spaces of acceptance, we cultivate boundless innovation, nurture collaborative spirit, and set the stage for a future where harmony and inclusiveness reign supreme.</p>' +

        '<div class="centered-buttons">' +

        '<button class="about-me-btn" onclick="loadPage1()">Professional Experience</button>' + '<button class="about-me-btn" onclick="loadPage3()">Back to About Me</button>' +

        '</div>' +
        
        '</div>' +
        
        '</div>';
}

// can also write the code like this: 

function loadPage3() {
    document.getElementById('about-me').innerHTML = `
        <section id="about-me">
        <h2 class="about-me-h2">ABOUT ME</h2>
            <div class="about-me">
                <div id="about-me-content"></div>
            </div>
            <div class="centralizador">
                <div class="ajustador-2">
                    <div class="about-menu">
                        <img class="about-me-intro" src="assets/img/IMG_3485.jpg" alt="click">
                        <div class="about-content">
                        <p class="centered-text">Passionate software engineer with a multicultural background and a psychology foundation. Former school psychologist collaborating with diverse teams and supporting over 360 students. Combining my passion for photography with a fascination for technology and user behavior. Thrilled to create innovative solutions and shape the digital landscape.</p>
                            <div class="centered-buttons">
                                <button class="about-me-btn" onclick="loadPage1()">Professional Experience</button>
                                <button class="about-me-btn" onclick="loadPage2()">Cultural Experience</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
