'use strict'
//Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.

let https = 'https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link'

let ID = https.substring(32,65);
alert (ID);