const meuNome = document.querySelector('.meu-nome');
const fName = meuNome.innerHTML;
const botaoVerMais = document.querySelector('button');
const skills = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';

function cliqueVer (e) {
    skills.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisskills (elemento) {
    elemento.addEventListener('click', cliqueVer)
}

function typeWriter (nome) {
    setTimeout( () => {
    const meuNomeF = nome.split('');
    meuNome.innerHTML='';
    meuNomeF.forEach( (letra, index) => {
        setTimeout(function (){
            meuNome.innerHTML += letra;
        }, 150 * index)
    })}, 1500)
    
}

// typeWriter(fName); 
maisskills(botaoVerMais);

