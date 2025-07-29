const ceu = document.querySelector('.ceu')

const lua = document.querySelector('.lua')

const montanha = document.querySelector('.montanha')

const estrada = document.querySelector('.estrada')

const texto = document.querySelector('.texto')


document.addEventListener('scroll', function() {
    let value = window.scrollY;

    ceu.style.top = -value * 0.3 + 'px';

    lua.style.left = +value * 0.1 +'%';
     lua.style.top = value * 0.1 +'%';

    
     montanha.style.top= -value * 0.1 + '%';

    estrada.style.bottom = -value * 0.3 + 'px';

    texto.style.top = value * 0.1 + '%'; // ← agora o texto desce ao rolar
});