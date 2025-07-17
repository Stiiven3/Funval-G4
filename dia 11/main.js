// Estos son los ejercicios

/*
    Esta pantalla es negra y tu lo sabes
 */ 

  //let numero=carlos;
  let nombre="Carlos"
  let BanderaRoja="true"
  let SinValor;
  let Nulo=0;
  let NumeroGrande=11185464686849135165168198165416816n;

       // console.log(numero);
        console.log(nombre);
        console.log(BanderaRoja);
        console.log(SinValor);
        console.log(Nulo);
        console.log(NumeroGrande);

        const Numero=12;
        const Nombre=12;
        const BanderaVerde=true;
        // const sinElemnto;


    // 1. Crea una variable para cada operación aritmética

     let suma=0, resta=0, multiplicacion=0,division=0;

    // 2. Crea una variable para cada tipo de operación de asignación,
    //    que haga uso de las variables utilizadas para las operaciones aritméticas

        suma=2+2;
        resta=2-2;
        multiplicacion=2*2;
        division=10/2;

       
        

    // 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

     let resultado= 5>3;
     console.log(resultado)
     let igual=10==10;
      console.log(igual)
     let menor=2<=3;
      console.log(menor)
     let diferentes=2!=3;
      console.log(diferentes)

    
      console.log(30>=4)

    // 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación


    // 5. Utiliza el operador lógico and

    // 6. Utiliza el operador lógico or

    // 7. Combina ambos operadores lógicos

    // 8. Añade alguna negación

    // 9. Utiliza el operador ternario

    // 10. Combina operadores aritméticos, de comparáción y lógicas



console.log("Hola mundo");

let login= 8;




let usuario="admi";
let password=123456; // el cambio se hace en la variable


(usuario === "admin" && password === 123456)
  ? console.log("Bienvenido")
  :(usuario!=="admin")
  ? console.log("El usuario esta mal escrito")
  : password!==123456
  ? console.log("La password mal")
  : console.log("Nunca entra");
  
  

  

/*
if(usuario=="admin" && password==123456 ){
    
    console.log("Iniciaste con exito");
    
}else{

     console.log("Login fallo");

}*/

let permisoMama = false;
let permisoPapa = true;
edad = 28;

  if ((permisoMama || permisoPapa) && (edad >= 18)) {
    console.log("puedo salir a bailar");
  } else {
    console.log("me quedo en casa");
  }

/*El usuariio va ingresar su fecha de nacimiento dia el mes y el a;o ustedes deberan decirle cuantos dias tieen de vida   nacio el 1 de 
julio del 2025 15 dias  ustedes deberan tener en cuenta a;os bisiestos y febrero*/ 

/*

        let año = parseInt(prompt("Introduce tu año de nacimiento:"));
         let dia = parseInt(prompt("Introduce tu día de nacimiento:"));
            let mes = parseInt(prompt("Introduce tu mes de nacimiento:"));

            let añoActual = 2025;
 

            let añosVividos = añoActual - año;


            let mesesVividos = añosVividos * 12;

            let diaaVividos=0, contador=0;




            let esBisiesto = false;

            if(año==2025){

               mesesVividos= año*mes;


            }else{
                    
                for(let i=año;i<=añoActual; i++){

                    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
                    esBisiesto = true; 

                    console.log(i);

                    contador++;

                    
                    
                }
                
                }

            }
                   

            
            console.log(contador);
            cantidadDias=añosVividos*365+contador;

            console.log("Has vivido aproximadamente " + añosVividos + " años");
            console.log("Has vivido aproximadamente " + mesesVividos + " meses");
            console.log("Has vivido aproximadamente " + cantidadDias + " Dias");
    
*/


// Solicitar al usuario su fecha de nacimiento
let dia = parseInt(prompt("Introduce tu día de nacimiento:"));
let mes = parseInt(prompt("Introduce tu mes de nacimiento (1-12):")) - 1; // JS cuenta meses desde 0
let año = parseInt(prompt("Introduce tu año de nacimiento:"));

// Crear objeto de fecha de nacimiento
let fechaNacimiento = new Date(año, mes, dia);

// Obtener la fecha actual
let hoy = new Date();

// Validación: si fecha de nacimiento es en el futuro
if (fechaNacimiento > hoy) {
  alert("Aún no has nacido. Por favor introduce una fecha válida.");
} else {
  // Calcular la diferencia en milisegundos el resultado  de restar dos objetos  Date es  en milisegundos por lo tanto tenemos que convertirlo.
  let diferenciaMs = hoy - fechaNacimiento;

  // Convertir milisegundos a días (1 día = 86400000 ms)
  let diasVividos = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

  alert("Has vivido " + diasVividos + " días.");
}


    /*  if (esBisiesto) {
            console.log("Tu año de nacimiento fue bisiesto.");

            } else {
            console.log("Tu año de nacimiento NO fue bisiesto.");
            }
   */ 
          


/* Realizar la serie de los numeros pares si el cliente coloca el numero 5
2,4,6,8,10 si el cliente coloca el numero 3
2,4,6
*/

let Cantidad = 0;

// Pedir al usuario cuántos pares quiere ver

/*
    let entrada = prompt("¿Cuántos números pares quieres mostrar?");
    Cantidad = parseInt(entrada);

    let paresMostrados = 0;

    for (let i = 2; paresMostrados < Cantidad; i++) {
        if (i % 2 === 0) {
            console.log(i);
            paresMostrados++;
        }
    }
*/


/*
let entrada = prompt("¿Cuántos términos de la serie Fibonacci quieres ver?");
let n = parseInt(entrada);

let a = 0;
let b = 1;

console.log("Serie Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(a);         // Mostrar el término actual
    let siguiente = a + b;  // Calcular el siguiente término
    a = b;                  // Desplazar a la derecha
    b = siguiente;
}
*/

/*
let entrada = prompt("¿Cuántos números primos quieres mostrar?");
let N = parseInt(entrada);

let cantidad = 0;
let num = 2;
let divisores = 0;

for (let i=1; cantidad < N; ) {
    if (num % i === 0) {  // cantidad de divisores incrementa 
        divisores++;
    }

    i++;

    if (i > num) {
        if (divisores === 2) {
            console.log(num);
            cantidad++;
        }

        num++;
        i = 1;
        divisores = 0;
    }
}
*/


