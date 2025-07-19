
// let n = 0;
// let x = 0;

// while (n < 3) {
//   n++;
//   x += n;
//   console.log(x);
// }

//n==1 x=0, x+=n ahora x pasara hacer 1 (primera vuelta) 
//n==2 x=1, x+=n ahora x pasara hacer 3 (segunda vuelta)
//n==3 x=3, x=n ahora x pasara hacer 6 (tercera vuelta) esta es la ultima por que asi lo establece la condicion. n<3; 

/*REALIZAR LA SERIE DE LOS NUMEROS PARES 
SI EL CLIENTE COLOCA EL NUMERO 5
2,4,6,8,10
SI EL CLIENTE COLOCA EL NUMERO 3
2,4,6*/

// Digitar la cantidad de numeros pares que deseas 
//1-identificar  lo digitado  y que me de  la cantidad n pero  en pares 
//2-identificar cuales son los pares
//3-imprimir solo los pares asta que sean 5;

// let n=parseInt(prompt("Ingrasa cantidad de numero pares aqui"));
// let i=0;
// let numero=1;

// while (i< n) {
    
//     if(numero%2===0){ 
//         console.log(numero);
//         i++;  
//     }
//     numero++;
// }

//Mostrar los primeros 10 múltiplos de 3

// let CantidadM=parseInt(prompt("Ingrasa cantidad de numero multiplos aqui"));
// let mutiplica=parseInt(prompt("numero a multiplicar"));
// let cuentameM=0;
// let Numeros=1;


// while(cuentameM<CantidadM){

//     let resultado= Numeros*mutiplica;
   
//         console.log(resultado);
    
//         cuentameM++;
    
//         Numeros++;
// }

//1- metodo 1  push  agrega elemento  al final de nuestro array
// nuevoArry.push("Yamina");
//2- permite agregar los valores en la parte principal nuevoArray.unshift("benjami","doom")
//3-splice();
// let nuevoArray=["juan","carlitos","geraldine","gabriel"];
// console.log(nuevoArray[4]);
// nuevoArry.push("Yamina");


//eliminar arrays 

// metodo pot  elimina el ultimo elemento

// let ultimoEstudiante=nuevoArray.pop();

// let primerEstudiante = nuevoArray.shift();










function calcularPromedio(notas) {

  if (notas.length === 0) {
    return 0; 
  }

  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  
  let promedio = suma / notas.length;

  return promedio;
}



// let notas1 = [32, 100, 25, 78];
// let promedio1 = calcularPromedio(notas1);
// console.log("Promedio notas1:", promedio1); 

// let notas2 = [32, 100, 10, 8, 0];
// let promedio2 = calcularPromedio(notas2);
// console.log("Promedio notas2:", promedio2); 

// let notas3 = [32];
// let promedio3 = calcularPromedio(notas3);
// console.log("Promedio notas3:", promedio3); 

// let notas4 = [32, 77];
// let promedio4 = calcularPromedio(notas4);
// console.log("Promedio notas4:", promedio4); 

// let notas5 = [];
// let promedio5 = calcularPromedio(notas5);
// console.log("Promedio notas5:", promedio5); 


let matriz = [
    [28, 39, 90, 89],
    [70, 32, 28, 18],
    [10, 0, 15, 31],
    [11, 23, 45, 67]
];
let suma=0;
for (let index = 0; index < matriz.length; index++) {
    suma += matriz[index][index];
                    // nota tratar de entender  el segundo index
}



//1-Comocorre toda una matriz con un for? **
//2-Comorecorrer los arreglos por separado en una matriz? sin for
//3-identificar cada elemento de la diagona pricipal

 let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];



for (let index = 0; index < listaEstudiantes.length; index++) {
    let estudiante=listaEstudiantes[index];

    if(estudiante.nacionalidad==="Argentina") {
        console.log(estudiante);
        
    }
    
}




/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts /

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}

/ mostrar a todos los estudiantes q sean de Argentina */