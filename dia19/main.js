let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Argentina", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];

let {nombre,pais,profesion,edad,mision }=estudiantesFunval


function renderizarEstudiantes(nombre="no respondio"){
  tabla=document.querySelector("#Tabla");
    tabla.innerHTML=`
     <tr class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                
            </tr>
    `
}

import { PlayAudio} from "./Funciones.js";