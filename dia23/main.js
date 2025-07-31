let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];

const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor está caído");
    }
  }, 5000);
});

const MostraLista = document.querySelector("#li");

async function mostrarEstudiantesAprobados() {
  const lista = await listaEstudiantes;

  const aprobados = lista.filter((est) => {
    let suma = 0;
    for (let nota of est.notas) {
      suma += nota;
    }
    let promedio = suma / est.notas.length;
    return promedio >= 51;
  });

  // Mostrar los aprobados en el DOM
  MostraLista.innerHTML = ""; // Limpiamos antes de insertar

  aprobados.forEach((est) => {
    let suma = 0;
    for (let nota of est.notas) {
      suma += nota;
    }
    let promedio = (suma / est.notas.length).toFixed(2);

    MostraLista.innerHTML += `
      <li>
        <strong>Nombre:</strong> ${est.nombre}<br>
        <strong>Edad:</strong> ${est.edad}<br>
        <strong>Promedio:</strong> ${promedio}
      </li>
      <hr>
    `;
  });
}


mostrarEstudiantesAprobados();
