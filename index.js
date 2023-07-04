const slideTrack = document.querySelector('.carrusel');
const menuFerias = document.getElementById('menuFerias');
const menuEventos = document.getElementById('menuEventos');
const menuVRV = document.getElementById('menuVRV');
const ferias = document.getElementById('ferias');
const eventos = document.getElementById('eventos');
const vrv = document.getElementById('vrv');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Evento del botón anterior
prevButton.addEventListener('click', () => {  
  slideTrack.scrollLeft -= 200;
  // slideTrack.style.transform = `translateX(0px)`;
});

// Evento del botón siguiente
nextButton.addEventListener('click', () => {
  slideTrack.scrollLeft += 200;
  // slideTrack.style.transform = `translateX(-200px * 7)`;
});


ferias.addEventListener('click', () =>{
  menuFerias.classList.toggle('oculto');
})

eventos.addEventListener('click', () =>{
  menuEventos.classList.toggle('oculto');
})

vrv.addEventListener('click', () =>{
  menuVRV.classList.toggle('oculto');
})

