/* 
    1er paso seria pedirle al usuario q ingrese la palabra o numero
    crear una funcion q reciba una palabra y la devuelva sin espacios
    crear una funcion q reciba una palabra y me la retorne toda en minisculas
    crear una funcion q reciba una palabra y la invierta y compare si son iguales y retorne true o false
    crear una funcion q le muestre al cliente si su palabra es o no palindrome
*/



// function esPrimo(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function mostrarPrimos(n) {
//   let contador = 0;
//   let numero = 2;
//   let resultado = "";

//   for (; contador < n; numero++) {
//     if (esPrimo(numero)) {
//       contador++;

//       }
//     }
//   }

//   alert("Serie de primos:\n" + resultado);

// let n = parseInt(prompt("Cantidad de primos que deseas mostrar"));
// mostrarPrimos(n);

/*
function Menu(){
    let opcion = parseInt(prompt(
        "Menu de platos:\n"+
        "1-Tacos\n"+
        "2-Arroz\n"+
        "3-Frito\n"+
        "4-Papas\n"+
        "5-Pizza\n"+
        "6-Salir\n"+
         "opc:\n"
    ))

    if((opcion>=1 && o<=5) && (!isNaN(opcion)) ) {

             switch (opcion) {
        case 1:
            console.log("Elegiste los tacos");
            
            break;

        case 2:
            console.log("Elegiste los arroz");
            break;
    
       case 3:
            console.log("Elegiste los frito");
            
            break;

        case 4:
            console.log("Elegiste los papas");
            
            break;

        case 5:
            console.log("Elegiste los pizza");
            
            break;

         }

    

    }else{

        console.log("");
        

       
    }

}

Menu();


 function Menu() {
   let total = 0;
    let pedido = "";
    let seguir = true;

    while (seguir) {
        let opc = parseInt(prompt(
            "Menú de platos:\n" +
           "1 - Tacos ($150)\n" +
            "2 - Arroz ($100)\n" +
            "3 - Frito ($120)\n" +
            "4 - Papas ($80)\n" +
            "5 - Pizza ($200)\n" +
            "6 - Finalizar pedido\n\n" +
           "Elige una opción:"
         ));

        switch (opc) {
             case 1:
                pedido += "- Tacos: $150\n";
                total += 150;
                 break;
            case 2:
                pedido += "- Arroz: $100\n";
                total += 100;
                 break;
            case 3:
                pedido += "- Frito: $120\n";
                total += 120;
                break;
             case 4:
                pedido += "- Papas: $80\n";
                total += 80;
                break;
             case 5:
                pedido += "- Pizza: $200\n";
                total += 200;
                break;
            case 6:
                seguir = false;
                break;
           default:
                 alert("Opción no válida. Intenta de nuevo.");
        }
     }

     alert("Factura final:\n\n" + pedido + "\nTotal a pagar: $" + total); }

*/



const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Error: División por cero";


let opcion = parseInt(prompt(
  "CALCULADORA\n" +
  "1. Sumar\n" +
  "2. Restar\n" +
  "3. Multiplicar\n" +
  "4. Dividir\n" +
  "Elige una opción:"
));

let num1 = parseInt(prompt("Introduce el primer número:"));
let operador =(prompt("Introduce operador aritmetico número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let resultado;



switch (opcion) {


    
  case 1:
    resultado = sumar(num1, num2);
    break;
  case 2:
    resultado = restar(num1, num2);
    break;
  case 3:
    resultado = multiplicar(num1, num2);
    break;
  case 4:
    resultado = dividir(num1, num2);
    break;
  default:
    resultado = "Opción no válida";
}

alert("Resultado: " + resultado);




