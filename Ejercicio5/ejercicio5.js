'use strict'

//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

let correo = 'pedrojaramillo@gmail.com'

let arroba = correo.indexOf('@')

let nombre = correo.substring(0,arroba)

alert(nombre);