'use strict'
//1. Escribir un programa que obtenga las iniciales de un jugador de futbol, 
//sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

let jugador = 'NY-10'

let pos = jugador.indexOf('-');

let iniciales = jugador.substring(0,pos);
let numero = jugador.substring(pos+1);

alert(iniciales);
alert(numero);