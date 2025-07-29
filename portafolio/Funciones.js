
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

document.addEventListener("DOMContentLoaded", function () {
    const text = `Soy estudiante de programación, También soy artista plástico; si quieres ver algunas de mis obras, haz clic aquí:`;
    const p = document.getElementById("typewriter");
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        p.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Velocidad de escritura
      } else {
        // Luego del texto, agregamos el enlace manualmente
        const link = document.createElement("a");
        link.href = "https://www.instagram.com/stiiwarsog/";
        link.className = "inline-block ml-1 text-white hover:text-green-400";
        link.innerHTML = `
          <svg class="inline w-6 h-6 lg:w-8 lg:h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
          </svg>
        `;
        p.appendChild(link);
      }
    }

    typeWriter();
  });