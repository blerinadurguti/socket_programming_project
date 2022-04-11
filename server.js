const { response } = require('express');
const net=require('net');

const server=net.createServer()

server.on('connection', (socket)=>{
var remoteAddress=socket.remoteAddress + ":"+socket.remotePort;
  console.log("New client connection is made %s", remoteAddress);

    socket.on('data', (data)=>{
        console.log("\nMessage received from %s: %s", remoteAddress, data)
        socket.write(`Hello ${data} this is your file ${"C:\Users\PC\Desktop\tcp\server\text.html"}`)
    })
    
