

/* ----------FETCH-------------- */
let contenedor = document.querySelector("#contenedor-usuarios");

fetch("https://dog.ceo/api/breeds/image/random/8")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    data.message.forEach((url) => {
      contenedor.innerHTML += `
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-2">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Perritos</h5>
    </a>
    <img src="${url}" alt="Perrito" class="rounded mb-4">
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Contactar
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
      `;
    });
  });

  /*
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">nombre de usuario: ${usuario.username}</p>
     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">correo: ${usuario.email}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Compañia nombre:${usuario.company.name} </p>
       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Sitio WEB:${usuario.website} </p>*/
