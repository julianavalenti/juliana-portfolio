const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const aboutSkill = [
                    '<p>HTML</p> <br> <p>Utilized HTML extensively in a MERN (MongoDB, Express, React, Node.js) full-stack project, where it played a pivotal role in building the user interface.Employed HTML tags and elements to structure and organize web pages, ensuring a cohesive and intuitive user experience.Integrated React components within HTML templates, enabling seamless rendering and interaction between the front-end and back-end of the application. </p> <br>',

                    '<p>CSS</p> <br> <p>Implemented CSS effectively in the projects, enhancing the visual appeal and styling of web pages to create a polished and professional user interface.Utilized CSS to apply consistent branding and design elements across different pages, ensuring a cohesive and visually pleasing user experience.Leveraged CSS to create responsive layouts and optimize the display of content across various devices, improving accessibility and user engagement.</p> <br>',

                    '<p>JavaScript</p> <br> <p>Utilized JavaScript to add interactivity and enhance functionality, such as implementing dynamic search features and real-time updates in the Bug Busters project. Leveraged JavaScript for data manipulation and integration with external APIs, enabling music playback and dynamic content display in the Choruso Music Player App and World Cup 2026 Host Cities project.Employed JavaScript for dynamic content rendering, allowing seamless updates and user interactions without page reloads, enhancing the user experience in the Bug Busters project.</p> <br>',

                    '<p>JSON</p> <br> <p>Utilized JSON (JavaScript Object Notation) to structure and store data in a readable and efficient format in your projects.Integrated JSON data with MongoDB schema in the World Cup 2026 Host Cities project, providing valuable information on host cities, must-see places, weather, and stay planning.Created robust JSON data connected to MongoDB schema as a direct API, allowing seamless retrieval and manipulation of data in the World Cup 2026 Host Cities project.</p> <br>',
                    
                    
                    '<p>React</p> <br> <p>Developed a comprehensive MERN networking app with React, creating a dynamic and responsive user interface using modular and reusable components.Demonstrated proficiency in React by effectively managing state, handling component lifecycle, and implementing advanced features like routing and form validation, resulting in a robust and user-friendly application.Optimized performance and ensured a smooth user experience by leveraging React virtual DOM and efficient rendering mechanisms, achieving efficient updates and minimizing unnecessary re-rendering of components.</p> <br>',
                    
                    
                    

                    '<p>Git</p> <br> <p>Demonstrated proficiency in Git, a version control system, throughout the projects, enabling effective collaboration and tracking of code changes.Successfully worked in a team environment using Git, utilizing branches, commits, and merges to manage codebase and ensure version control.Leveraged Git pull requests (PRs) feature to facilitate code review and collaboration, ensuring code quality and seamless integration of features developed by team members. </p> <br>',

                    '<p>Mongodb</p> <br> <p>Utilized MongoDB, a NoSQL database, in the projects, enabling efficient storage and retrieval of data.Integrated MongoDB with the projects backend, allowing seamless interaction between the application and the database. Leveraged MongoDB flexible document-based structure to store and manipulate data, providing valuable information on host cities, music player data, and other project-specific data requirements. </p> <br>',

                    '<p>Postgres</p> <br> <p>Utilized PostgreSQL, a powerful relational database management system, in the projects to efficiently store and manage structured data.Integrated PostgreSQL with the projects backend, establishing a seamless connection between the application and the database. Leveraged PostgreSQL robust features such as transactional support, data integrity, and SQL querying capabilities to ensure reliable data storage and retrieval for various functionalities within the projects.</p> <br>',

                    '<p>API</p> <br> <p>Utilized APIs (Application Programming Interfaces) in the projects to access and integrate external services and data sources.Integrated APIs to retrieve dynamic data, such as news articles or music data, enhancing the functionality and content of the applications. Leveraged APIs to communicate with external services, enabling features like real-time updates, data enrichment, and seamless integration with third-party platforms for a richer user experience. </p> <br>'
                    
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${aboutSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = 'show skill description';
    } )
} );



