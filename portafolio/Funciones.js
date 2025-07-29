
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

