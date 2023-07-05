const slideTrack = document.querySelector('.slide-track');
const menuFerias = document.getElementById('menuFerias');
const menuEventos = document.getElementById('menuEventos');
const menuVRV = document.getElementById('menuVRV');
const ferias = document.getElementById('ferias');
const eventos = document.getElementById('eventos');
const vrv = document.getElementById('vrv');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const iconoFerias = document.getElementById('iconoFerias');
const iconoEventos = document.getElementById('iconoEventos');
const iconoVRV = document.getElementById('iconoVRV');

// Evento del botón anterior
prevButton.addEventListener('click', () => {    
  slideTrack.style.animation = `none`;
  setTimeout(() => {
    slideTrack.style.animation = `scroll 60s linear infinite`;
  }, 0);  
});

// Evento del botón siguiente
nextButton.addEventListener('click', () => {
  slideTrack.style.animation = `none`;
  slideTrack.classList.add('endScroll');
  setTimeout(() => {
    slideTrack.classList.remove('endScroll');
    slideTrack.style.animation = `scroll 60s linear infinite`;
  }, 0);  

});


ferias.addEventListener('click', () =>{
  menuFerias.classList.toggle('oculto');
  iconoFerias.classList.toggle('cambioIcono');
  
})

eventos.addEventListener('click', () =>{
  menuEventos.classList.toggle('oculto');
  iconoEventos.classList.toggle('cambioIcono');
})

vrv.addEventListener('click', () =>{
  menuVRV.classList.toggle('oculto');
  iconoVRV.classList.toggle('cambioIcono');
})

