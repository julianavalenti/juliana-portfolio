const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const aboutSkill = [
                    '<p>HTML</p> <br> <p>text about html </p> <br>',
                    '<p>CSS</p> <br> <p>Text about CSS.</p> <br>',
                    '<p>JavaScript</p> <br> <p>text about JavaScrpit.</p> <br>',
                    '<p>JSON</p> <br> <p>text about json.</p> <br>',
                    '<p>React</p> <br> <p>Text about react</p> <br>',
                    
                    '<p>Python</p> <br> <p>text about python.</p> <br>',
                    '<p>Git</p> <br> <p>text about git. </p> <br>',
                    '<p>Mongodb</p> <br> <p>text about mongodb. </p> <br>',
                    '<p>Postgres</p> <br> <p>text about Postgres </p> <br>',
                    '<p>API</p> <br> <p>text about API. </p> <br>'
                    
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



