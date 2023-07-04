const slideTrack = document.querySelector('.carrusel .slide-track');
const menuFerias = document.getElementById('menuFerias');
const menuEventos = document.getElementById('menuEventos');
const menuVRV = document.getElementById('menuVRV');
const ferias = document.getElementById('ferias');
const eventos = document.getElementById('eventos');
const vrv = document.getElementById('vrv');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
const slideWidth = 200;
const numSlides = document.querySelectorAll('.slide').length/2;

prevButton.addEventListener('click', () => {
    console.log("click");
    slideIndex = (slideIndex - 1 + numSlides) % numSlides;
    updateSlideTrackPosition();
});

nextButton.addEventListener('click', () => {
  console.log("hola");
  slideIndex = (slideIndex + 1) % numSlides;
  updateSlideTrackPosition();
});

function updateSlideTrackPosition() {
  const slideMargin = 10; // Margen entre las diapositivas
  const trackPosition = -(slideWidth + slideMargin) * slideIndex;
  console.log(trackPosition);
  console.log(slideIndex);
  slideTrack.style.transform = `translateX(${trackPosition}px)`;
}


ferias.addEventListener('click', () =>{
  menuFerias.classList.toggle('oculto');
})

eventos.addEventListener('click', () =>{
  menuEventos.classList.toggle('oculto');
})

vrv.addEventListener('click', () =>{
  menuVRV.classList.toggle('oculto');
})

