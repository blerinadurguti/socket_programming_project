const { response } = require('express');
const net=require('net');

const server=net.createServer()

server.on('connection', (socket)=>{
    const remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
    console.log("Nje lidhje e re u krijua %s", remoteAddress);

    socket.on('CH01', function (from, msg) {
        consoleLogDms(from, msg);
    });

    socket.on('CH02', function (from, msg) {
        consoleLogDms(from, msg);
    });

    socket.on('CH03', function (from, msg) {
        consoleLogDms(from, msg);
    });

    socket.on('CH04', function (from, msg) {
        consoleLogDms(from, msg);
    });


    socket.on('data', (data)=>{
        console.log("\nMesazhi u pranua nga %s: %s", remoteAddress, data)
        socket.write('Pershendetje ${data} ky eshte file i juaj ${"C:/Users/Admin/WebstormProjects/socket_programming_project/landingPage.html"}')

    })
    socket.on('close',()=>{
        console.log("Komunikimi perfundoi")
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})
server.listen(3000, ()=>{
    console.log("Serveri po degjon ne adresen: ", server.address().port)
})
