
 let entrada= prompt("1-Calcular el área de un cuadrado. 2-Calcular el área de un rectángulo. 3-Calcular el área de un triángulo.");
let opc=parseInt(entrada);


console.log("hola")

console.log("1-Calcular el área de un cuadrado.");
 console.log("2-Calcular el área de un rectángulo.");
 console.log("3-Calcular el área de un triángulo.");
 console.log("opc:");

 
 if( (opc>=1 && opc<=3) && (!isNaN(opc)) ){


    switch (opc) {
        case 1:

        console.log("Calcular el área de un cuadrado.");

         let entrada= prompt("ingresa el valor de los lados de tu cuadrado");
         let Lado=parseInt(entrada);

         let area=Lado*Lado;

         console.log(" Cuadrado area es:"+area);
         
            
            break;

        case 2:
            console.log("Calcular el área de un rectángulo.");

             let entrada1= prompt("ingresa el valor de la base");
             let base=parseInt(entrada1);
             entrada1= prompt("Ingresa el valor de la altura");
             let altura=parseInt(entrada1);

             Rectangulo=base*altura;

             console.log("El area del rectangulo es:"+Rectangulo);
             

            break;

        case 3:
            console.log(" Calcular el área de un triángulo.");

             let entrada2= prompt("ingresa el valor de la base");
             let base1=parseInt(entrada2);
             entrada2= prompt("Ingresa el valor de la altura");
             let altura1=parseInt(entrada2);



             triangulo=(base1*altura1)/2;

             console.log("El area del triangulo es:"+triangulo);

            break;

    }
        
}else{

    console.log("ERROR 250 Opcion incorrecta vuelve a intentarlo V:");
    
}







