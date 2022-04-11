const { response } = require('express');
const net=require('net');

const server=net.createServer()

server.on('connection', (socket)=>{
var remoteAddress=socket.remoteAddress + ":"+socket.remotePort;
  console.log("Nje lidhje e re u krijua %s", remoteAddress);

    socket.on('data', (data)=>{
        console.log("\nMesazhi u pranua nga %s: %s", remoteAddress, data)
        socket.write('Pershendetje ${data} ky eshte file i juaj ${"C:/Users/PC/Documents/GitHub/socket_programming_project/html/landingPage.html"}')
    })
