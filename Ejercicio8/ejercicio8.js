'use strict'
//Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un 
//laboratorio. Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde 
//indica la fila A del laboratorio 2

let codigo = 'LAB3#E'
let cod = 0;
let hastag = codigo.indexOf('#')

let lab = codigo.substring(0,hastag)

let siguienteLetra = codigo.charCodeAt(hastag+1);

cod = siguienteLetra + 1;

alert("La sigueinte letra es: " + lab + String.fromCodePoint(cod))

