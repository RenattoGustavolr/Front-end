const slides = document.querySelector('#carroselapre1');
const images = document.querySelectorAll('#carroselapre1 img');

const prevBtn = document.querySelector('.volta');
const nextBtn = document.querySelector('.proximo');

let index = 0;

function showSlide() {
  slides.style.transform = `translateX(${-index * 300}px)`; // largura do carrossel
}

nextBtn.addEventListener('click', () => {
  index++;
  if (index >= images.length) index = 0;
  showSlide();
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = images.length - 1;
  showSlide();
});