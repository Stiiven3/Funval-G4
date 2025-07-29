let abrir = document.querySelector("#abrirModal");
let cerrar = document.querySelector("#cerrarModal");
let modal = document.querySelector("#modal");

abrir.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

cerrar.addEventListener("click", function () {
  modal.classList.add("hidden");
});




let btnEnviado=document.querySelector("#submit");

btnEnviado.addEventListener("click",function(){
 
 let table1=document.querySelector("#table")
 table1.style.display="block";


    let row =table1.insertRow(-1); 
    let Nombre=row.insertCell(0);
    let Edad=row.insertCell(1);
    let Pais=row.insertCell(2);

    Nombre.innerHTML=document.querySelector("#Nombre").value; // value
    //  sirve para devolver el valor que el usuario ingreso
    Edad.innerHTML=document.querySelector("#Edad").value;
    Pais.innerHTML=document.querySelector("#Pais").value;
  



     modal.classList.add("hidden");
  document.querySelector("#formulario").reset();

});
