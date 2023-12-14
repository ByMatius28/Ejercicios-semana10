'use strict'
//Escribir un programa de extraiga las parte numérica de una placa de un auto.


let plate = 'ABC-123';
//obtener pos guion let pos
//

let pos = plate.indexOf('-');
// obtener la parte de letras
let letras = plate.substring (0,pos);
//obtener los numeros
let numeros = plate.substring(pos+1);

alert(letras);
alert(numeros);