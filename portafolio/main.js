

import { Proyectos,target} from "./Proyectos.js";

// Esperar a que el HTML esté cargado antes de ejecutar
document.addEventListener("DOMContentLoaded", () => {
  Proyectos(target);
});

 const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
