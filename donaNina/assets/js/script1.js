// Carrossel de imagens
const carrossel = document.getElementById('carroselapre1');
const imagens = carrossel.querySelectorAll('img');
const btnProximo = document.querySelector('button.proximo');
const btnVolta = document.querySelector('button.volta');

let indice = 0;

function mostrarImagem(indice) {
    const largura = imagens[0].clientWidth;
    carrossel.style.transform = `translateX(${-largura * indice}px)`;
}

btnProximo.addEventListener('click', () => {
    indice++;
    if (indice >= imagens.length) indice = 0;
    mostrarImagem(indice);
});

btnVolta.addEventListener('click', () => {
    indice--;
    if (indice < 0) indice = imagens.length - 1;
    mostrarImagem(indice);
});

// Auto-play
setInterval(() => {
    indice++;
    if (indice >= imagens.length) indice = 0;
    mostrarImagem(indice);
}, 5000);