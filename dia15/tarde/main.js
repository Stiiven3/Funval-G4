// let estudiantes = [
//   {
//     nombre: "kevin",
//     pais: "Bolivia",
//   },
//   {
//     nombre: "Pablo",
//     pais: "Argentina",
//   },
//   {
//     nombre: "Geraldine",
//     pais: "Peru",
//   },
//   {
//     nombre: "Gabriel",
//     pais: "Argentina",
//   },
//   {
//     nombre: "Mario",
//     pais: "Argentina",
//   },
// ];




// let contenedor = document.querySelector("#contenedor-estudiantes");
// for (let i = 0; i < estudiantes.length; i++) {
 

//             if(estudiantes[i].pais==="Argentina"){

//                 contenedor.innerHTML += `<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
//                     <p class="font-normal text-gray-700 dark:text-gray-400">Pais de origen: ${estudiantes[i].pais}</p>
//                     </a>`;

//                 }
// }



const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];


        let contenedor = document.querySelector("#contenedor-helado");
        const imagen = "https://img.freepik.com/fotos-premium/helado-cono_1025152-3.jpg?semt=ais_hybrid&w=740"

    for (let i = 0; i < productos.length; i++) {
    
                    contenedor.innerHTML += `<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                    <img class="w-50" src=${imagen} alt=${imagen}
                        <h1 class="mb-2 text-5xl font-bold tracking-tight text-white dark:text-white">${productos[i].id}</h1>
                        <p class="font-normal text-gray-700 dark:text-gray-400"> ${productos[i].nombre}  </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400"> precio ${productos[i].precio}</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400"> stock ${productos[i].stock}</p>

                        <button class="bg-amber-600" > Hola mundo </button>

                        </a>`;

                
    }