  /* 
   mostrarMenu=() =>  {
    let opc = prompt(
        "1 - Sumar\n" +
        "2 - Restar\n" +
        "3 - Salir\n" +
        "Elige una opción:"
    );

    if (opc === null) {
        alert("Programa terminado.");
        return; // Termina la función
    }

    let opciones = parseInt(opc);

    switch (opciones) {
        case 1:
        alert("Elegiste sumar");
        mostrarMenu(); // Vuelve a mostrar el menú
        break;

        case 2:
        alert("Elegiste restar");
        mostrarMenu();
        break;

        case 3:
        alert("Saliendo...");
        // No se llama mostrarMenu(), termina aquí
        break;

        default:
        alert("Opción inválida");
        mostrarMenu();
        break;
    }
    }

mostrarMenu();


let total = 0;

function MostrarMenu() {
  let opc = prompt(
    "Ingresa la opción:\n" +
    "1 - Suma\n" +
    "2 - Resta\n" +
    "3 - Multiplicación\n" +
    "4 - División\n" +
    "5 - Salir"
  );

  if (opc === null) {
    alert("Programa terminado.");
    return;
  }

  let opciones = parseInt(opc);

  switch (opciones) {
    case 1:
      alert("Elegiste: Suma");
      total += 100;
      break;

    case 2:
      alert("Elegiste: Resta");
      total += 100;
      break;

    case 3:
      alert("Elegiste: Multiplicación");
      total += 100;
      break;

    case 4:
      alert("Elegiste: División");
      total += 100;
      break;

    case 5:
      alert("Saliendo...");
      alert("Total acumulado: $" + total);
      return;

    default:
      alert("Opción inválida");
  }

  pedido(); // preguntar si desea seguir
}

function pedido() {
    do {
    let Peticion = prompt("¿Quieres hacer otro pedido? (si/no)");

    if (Peticion === null) {
        alert("Cancelado.");
        break;
    }

    if (Peticion.toLowerCase() === "si") {
        MostrarMenu();  // vuelve al menú
        break;          // salimos del do...while para evitar repetición
    } else {
        alert("Gracias por comprar.");
        break; // salimos
    }

    } while (true);  // correcto pero innecesario si usas break
}

function main() {
  MostrarMenu(); // inicia el flujo
}

main();*/
