const net=require('net');
const { send } = require('process');
const readline=require('readline-sync')

const options={
    port:3000,
    host: '127.0.0.1'
}

const admin="Grupi";
const password="11";


const client=net.createConnection(options)

client.on('connect', ()=>{
    console.log('U lidh me sukses!')
    sendLine()
})

client.on('data', (data)=>{
    console.log("Serveri pranoi mesazhin " + data)
    sendLine()
})
