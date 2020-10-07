/* CREANDOLO UNO MISMO
const math = require ('./math'); // Requiere y/o importa math.js
console.log(math);
console.log(math.hello('Marcos'));
console.log(math.add(15, 12));
console.log(math.substract(15, 12));
console.log(math.multiply(15, 2));
console.log(math.divide(15, 3));
console.log(math.divide(15, 0)); */

/* TRAYENDO LIBRERIA CORE PERTENECIENTE A NODE
const os = require('os');

console.log('SO:', os.type());  
console.log('SO:', os.platform());
console.log('SO version:', os.release());
console.log('Free memory:', os.freemem(), 'bytes');
console.log('Total memory:', os.totalmem(), 'bytes');
 */

 /* const fs = require('fs');

 // CODIGO ASINCRONO
 fs.writeFile('./texto.txt', 'Aqui tenemos cositas bonitas', function(err){
    if(err){
        console.log(err);
    }  
    console.log('Archivo creado');
 });

 console.log('Ultima linea de codigo');


fs.readFile('./texto.txt', function(err, data) {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})
 */

 // const result = fs.writeFile('', '') CODIGO BLOQUEANTE


/* const users= query('SELECT * FROM Users');
query('Select * FROM users', function (err, users) {
    if(err){
        console.log(err);
    }
    if(users){
        console.log(users);
    }
})  */

//const http = require('http');
/* 
http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>NodeJS is better then all. I\'m Rote pleasure to meet you</h1>');
    res.end();
}).listen(3000); */

/* http.createServer(function(req, res) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.write('Hi my name is Rodrigo');
    res.end();
}).listen(3000); */
/* const colors = require('colors')

const handleServer = function(req, res) {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Malas practicas</h1>');
    res.end();
}

const server = http.createServer(handleServer)
server.listen(3000, function() {
    console.log('SV in port 3000'.rainbow);
}) */

//NPM INIT PARA INICIAR Y DECLARAR EL PROYECTO Y LIBRERIAS NECESARIAS

const colors = require('colors')

const express = require('express');

const sv = express();

sv.get('/', function (req, res) {
    res.send('<h1>It\'s live</h1>')
})

sv.listen(3000, function() {
    console.log('SV in port 3000'.yellow);
});