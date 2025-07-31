/* ----------FETCH-------------- */
let contenedor = document.querySelector("#contenedor-usuarios");

async function obtenerUsuarios() {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!respuesta.ok) {
      contenedor.innerHTML = `<p class="text-red-500">No se pudo obtener los datos. Código: ${respuesta.status}</p>`;
      return;
    }

    const data = await respuesta.json();

    data.forEach((usuario) => {
      contenedor.innerHTML += `
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Usuario: ${usuario.username}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Correo: ${usuario.email}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Empresa: ${usuario.company.name}</p>
        </div>
      `;
    });

  } catch (error) {
    contenedor.innerHTML = `<p class="text-red-500">Ocurrió un error inesperado al procesar los datos.</p>`;
    console.error("Error capturado:", error);
  }
}

obtenerUsuarios();

