export const target = [

  {
    img: "./Img/Super.png",
    nombreP: "Super mercado",
    link: "https://stiiven3.github.io/TiendaOnline/",
  },

   {
    img: "./Img/tic.png",
    nombreP: "Tic tac Toe",
    link: "https://stiiven3.github.io/Funval-G4/practica8/",
  },

  {
    img: "./Img/Team-page.png",
    nombreP: "Team-Page",
    link: "team-page-iwwu.vercel.app/",
  },

  {
    img: "./Img/perrito.png",
    nombreP: "Landing-page",
    link: "https://stiiven3.github.io/Funval-G4/dia9/ejercicio/",
  },


  {
    img: "./Img/One piece.png",
    nombreP: "Tribute page",
    link: "https://stiiven3.github.io/Tribute-Page/Tribute%20page.html",
  },
  {
    img: "./Img/hambugues.png",
    nombreP: "Restaurante",
    link: "https://stiiven3.github.io/Landing-page/Landing%20page.html",
  },
  {
    img: "./Img/insta.png",
    nombreP: "Login Instagram",
    link: "https://stiiven3.github.io/Funval-G4/dia3/Practica2/index.html",
  },
  {
    img: "./Img/Tenical.png",
    nombreP: "Technical Documentation",
    link: "https://stiiven3.github.io/Technical-documentacion-page/Documention%20page.html",
  },

  

   
];

let targeta = document.querySelector("#contenedor-Targeta");

export function Proyectos(target) {
  for (let index = 0; index < target.length; index++) {
    targeta.innerHTML += `
      <div class="bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col items-center p-4 hover:scale-105 shadow-cyan-500/50 transition-transform duration-300">
        <img
          class="rounded-4xl w-full object-cover"
          src="${target[index].img}"
          alt="${target[index].nombreP}"
        />
        <div class="w-full text-center mt-4">
          <h2 class="text-2xl text-white font-semibold p-2">${target[index].nombreP}</h2>
        </div>
        <a
          class="w-full flex items-center justify-center mt-4"
          target="_blank"
          href="${target[index].link}"
        >
          <button
            class="bg-black dark:bg-green-800 cursor-pointer hover:bg-green-400 text-yellow-400 p-3 rounded-xl w-[80%] text-xl font-bold flex items-center justify-center gap-2 hover:text-black transition-colors duration-300"
          >
            Detalles del proyecto
          </button>
        </a>
      </div>
    `;
  }
}



/* nuevos cambios para mejor mantenimiento*/