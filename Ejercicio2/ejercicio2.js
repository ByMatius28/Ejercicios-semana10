'use strict'
//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato 
//de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

let codigo = '01.24'

let pos = codigo.indexOf('.')

let pisos = codigo.substring(0,pos);

let oficinas = codigo.substring(pos+1);

alert(pisos);
alert(oficinas);