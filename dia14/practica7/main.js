const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 


 productos.forEach((items,i) => {
    if(items.hasOwnProperty("nombre") && items.hasOwnProperty("precio")){

        console.log(items);
    }
       

});


/* map crea un nuevo array pero  cambiando los valores */
console.log("*********Descuento***********");

 FuncionDescuento=(productos)=>{
    

   let Descuento= productos.precio*0.10;

   return Descuento;

}

let ProductosDescuento=productos.map(FuncionDescuento);
console.log(ProductosDescuento);

/* filter crea un nuevo array pero filtrando los valores */
console.log("*********Filtro menores a 100***********");
Funcionfiltro=(productos)=>{

    let filtro = productos.filter((productos)=>productos.precio<100);

    return filtro;
}

let productosFiltro=Funcionfiltro(productos);
console.log(productosFiltro);
 
/* slice crea un nuevo array pero solo de los primeros valores los valores */
console.log("*********Primeros Valores**********");
Funcionslece=(productos)=>{

    let Primerosvalores = productos.slice(1,2);

    return Primerosvalores;
}

console.log(Funcionslece(productos));

/****ordenando de mayor a menor****/ 

console.log("*********Ordenar valores*********");
productos.sort(function (a, b) {
  if (a.precio > b.precio) {
    return 1;
  }
  if (a.precio < b.precio) {
    return -1;
  }
  // a must be equal to b
  return 0;
});


console.log(productos);



console.log("*********Valores reverse*********");

const reversa = productos.reverse();

console.log(reversa);
