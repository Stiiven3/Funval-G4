
 const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

function PlayAudio(){

       const audio = document.getElementById("musica");
     
        if (audio.paused) {
      audio.play().catch(error => {
        console.log("Reproducción bloqueada:", error);
      });
    } else {
      audio.pause();
    }

 }


 document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('modal');
  const cerrarBtn = document.getElementById('cerrarModal');
const modalContent = document.getElementById('modalContent');


  form.addEventListener('submit', (e) => {
    e.preventDefault(); 


    const nombre = document.getElementById('Nombre').value;

 
    modalContent.textContent = `${nombre} enviaste un mensaje a Steven Orozco`;

    modal.classList.remove('hidden');
  });

  cerrarBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});