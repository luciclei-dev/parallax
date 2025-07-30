const ceu = document.querySelector('.ceu')

const ceuDia = document.querySelector('.ceu-dia')

const lua = document.querySelector('.lua')

const montanha = document.querySelector('.montanha')

const estrada = document.querySelector('.estrada')

const texto = document.querySelector('.texto')


document.addEventListener('scroll', function() {
    let value = window.scrollY;

    
     ceu.style.transform = `translateY(${value * 0.5}%)`;
    
   ceuDia.style.transform = `translateY(${-value * 0.4}%)`;


    lua.style.transform = `translatex(${+value * 0.3}%)`;

     lua.style.top = value * 0.5 +'%';

     
     montanha.style.transform = `translateY(${-value}px)`;

   const scale = 1 + value * 0.0005; // aumenta o zoom conforme o scroll
estrada.style.transform = `translateY(${value * 0.1}px) scale(${scale})`;

    texto.style.top = value * 0.2 + '%'; 
});
