'use strict'
//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-12”

let fecha = '2023-10-12'
 
let pos = fecha.indexOf('-');

let mes = fecha.substring(pos+1,pos+3);

alert(mes);
