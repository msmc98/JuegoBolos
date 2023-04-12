"use strict"

import Juego from './juego.js';

let juego;

/*======================= Variables =============================*/

// Seleccionar la imagen de la bola

const bola = document.getElementById('bola');

//Variables de la tabla
let jugador1;
let jugador2;

//INTRODUCCIÓN DE DATOS PARA EL JUEGO

rellenarTabla();

//Evento en la bola para que al hacer click caigan los bolos

bola.addEventListener('click', tirarBolos);


/* ======================= Funciones ========================= */

/*
Función para desplegar la alerta que nos dirá el número de bolos caidos
*/
function alerta(numBolosCaidos){
  if(numBolosCaidos>=0 && numBolosCaidos<5){
    Swal.fire({
      title: 'Mal tiro, ¡suerte la próxima vez!',
      text: 'Bolos tirados: ' + numBolosCaidos,
      imageUrl: 'images/malTiro.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image'
    })
  }else if(numBolosCaidos>=5 && numBolosCaidos<=9){
    Swal.fire({
      title: '¡Buen tiro, sigue así!',
      text: 'Bolos tirados: ' + numBolosCaidos,
      imageUrl: 'images/tiroBueno.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image'
    })
  }else{
    Swal.fire({
      title: '¡Pleno!',
      text: 'Bolos tirados: ' + numBolosCaidos,
      imageUrl: 'images/pleno.jpg',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image'
    })
  }
}

jugador1 = document.getElementById("jugador1").innerHTML;
jugador2 = document.getElementById("jugador2").innerHTML;

/*
Función para rellenar la tabla
*/
function rellenarTabla(){
  do{
    jugador1 = prompt("Nombre del jugador 1: ");
    jugador2 = prompt("Nombre del jugador 2: ");
  }while(jugador1 == "" && jugador2 == "" || jugador1 == null && jugador2 == null);

  juego = new Juego(jugador1, jugador2);
  printNames();
}

function printNames(){
  document.getElementById("jugador1").innerHTML = juego.jugador1.getNombre();
  document.getElementById("jugador2").innerHTML = juego.jugador2.getNombre();
}

function printPuntuation(){
  if(juego.turno% 2 == 0){
    document.getElementById("puntuacion1").innerHTML = juego.target.getPuntuacion();
  }else{
    document.getElementById("puntuacion2").innerHTML = juego.target.getPuntuacion();
  }
}

/*
Función para tirar los bolos
*/
function tirarBolos(){
  let tirada = juego.target.addTirada()
  console.log(juego.target)
  if(tirada === undefined){
    alert("Turno de siguiente jugador")
    passedJugada();
    juego.changeTargetPlayer()
    nuevosBolos()
  }else{
    //Crear constante con un número aleatorio que represente los bolos caídos
    const numBolosCaidos = juego.target.tirada.puntos
    //Selecciono todos los bolos a partir de su clase
    let bolos =  Array.from(document.querySelectorAll('.bolo'));
    // excluir elementos con clase caido
    bolos = bolos.filter((value)=>{return value.class != "caido"});
    bolos = bolos.sort(function() {return Math.random() - 0.5}); //desordeno el array para que no se tumben por orden y cada tiro los bolos caigan de distinta forma

    //Tiro los bolos
    bolos.forEach((value,index)=>{
      if(index<numBolosCaidos){
        value.src = "images/boloXcaido.png";
        value.class = "caido";
      }
    });
  }
  printPuntuation();
  printTiradas();
}

function nuevosBolos(){
  let bolos =  Array.from(document.querySelectorAll('.bolo'));
  bolos.forEach((value)=>{
    value.src = "images/boloX.png";
    // eliminar clase caido
    value.class = "";
  });
}

function passedJugada(){
  if(juego.turno% 2 == 0){
    document.getElementById("jugadas1").innerHTML = juego.target.tirada.decrementarJugadasRestantes();
  }else{
    document.getElementById("jugadas2").innerHTML = juego.target.tirada.decrementarJugadasRestantes();
  }
}

function printTiradas(){
  if(juego.turno% 2 == 0){
    document.getElementById("tiradas1").innerHTML = juego.target.tirada.getTirada();
  }else{
    document.getElementById("tiradas2").innerHTML = juego.target.tirada.getTirada();
  }
}

