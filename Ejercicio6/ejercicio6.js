'use strict'
//Escribir un programa que obtenga el nombre de usuario de facebook desde la url

 let url = 'Facebook.com/angelmena'

 let slash = url.indexOf('/');

 let nombreUsuario = url.substring(slash+1);

 alert(nombreUsuario);