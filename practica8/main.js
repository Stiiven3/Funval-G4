/* 1- cuando le de click debe dibujarse  la x que eres tu
   2-El circulo 0 es de la maquina debe poner  despues de tu jugada  
   2- cuando el jugador  pase de turno  debe  poder dibujar  el o 
   3- debe poder detectar si  los div todos tiene letras asignadas
   4- identificar cuando tenga una linea  en vertical o horizonta  o diagonal y decir ganador
   5- reiniciar el juego */ 

let matriz = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

let jugador = false; 
let juegoTerminado = false;


const celdas = [];
for(let i=0; i<9; i++) {
  celdas.push(document.querySelector(`#Celda${i}`)); // recorre los div y sus subindice
}


function dibujarSimbolo(celda, simbolo){
  celda.innerHTML = simbolo;
  celda.classList.add('ocupada');
}

// Detectar ganador con if (horizontal, vertical, diagonal)
function detectarGanador() {
  // Filas
  for(let i=0; i<3; i++) {
    if(matriz[i][0] !== 0 && matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2]){
      return matriz[i][0];
    }
  }
  // Columnas
  for(let j=0; j<3; j++) {
    if(matriz[0][j] !== 0 && matriz[0][j] === matriz[1][j] && matriz[1][j] === matriz[2][j]){
      return matriz[0][j];
    }
  }
  // Diagonal principal
  if(matriz[0][0] !== 0 && matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]){
    return matriz[0][0];
  }
  // Diagonal secundaria
  if(matriz[0][2] !== 0 && matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]){
    return matriz[0][2];
  }
  return 0; // no hay ganador
}

// Revisar si tablero está lleno
function tableroLleno() {
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(matriz[i][j] === 0) return false;
    }
  }
  return true;
}

// La máquina juega: pone O (2) en la primera celda vacía que encuentre
function maquinaJuega(){
  for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
      if(matriz[i][j] === 0){
        matriz[i][j] = 2;
        let index = i*3 + j;  // [1][2]
        dibujarSimbolo(celdas[index], 'O');
        return;
      }
    }
  }
}

function pasarturno(){
  document.getElementById("turno").addEventListener("click", function(){
    if (juegoTerminado || !jugador) return;

    maquinaJuega();

    let ganadorMaquina = detectarGanador();
    if(ganadorMaquina === 2){
      alert("Ganó la máquina");
      juegoTerminado = true;
      return;
    }
    if(tableroLleno()){
      alert("Empate");
      juegoTerminado = true;
      return;
    }

    jugador = false; // vuelve al jugador
  });
}

pasarturno(); 


// Función para manejar click en celdas del jugador
function clickJugador(index){
  if(juegoTerminado) return;
  if(jugador) return; // no es turno jugador

  let fila = Math.floor(index/3);
  let col = index % 3;

  if(matriz[fila][col] !== 0) return; // ya ocupada

  // Pone X (1)
  matriz[fila][col] = 1;
  dibujarSimbolo(celdas[index], 'X');

  // Revisar ganador
  let ganador = detectarGanador();
  if(ganador === 1){
    alert("¡Ganaste!");
    juegoTerminado = true;
    return;
  }
  if(tableroLleno()){
    alert("¡Empate!");
    juegoTerminado = true;
    return;
  }

  // Cambia turno a máquina
  jugador = true;

  
 
}

// Asignar evento click a cada celda
for(let i=0; i<9; i++){
  celdas[i].addEventListener('click', () => {
    clickJugador(i);
  });
}

// Botón reiniciar
document.getElementById('reinicio').addEventListener('click', () => {
  matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];
  jugador = false;
  juegoTerminado = false;
  celdas.forEach(celda => {
    celda.innerHTML = '';
    celda.classList.remove('ocupada');
  });
});
