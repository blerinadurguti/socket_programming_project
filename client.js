const net=require('net');
const { send } = require('process');
const readline=require('readline-sync')
const fs = require("fs");

const options={
    port:3000,
    host: '127.0.0.1'
}

const admin="Grupi";
const password="11";

const client=net.createConnection(options)

client.on('connect', ()=>{
    console.log('U lidh me sukses!')
    client.write('Pershendetje nga Blerina Beka\n');
    client.write('Pershendetje nga Blerina Durguti\n');
    client.write('Pershendetje nga Blerta Ujkani\n');
    client.write('Pershendetje nga Blinera Kadriu\n');
    client.write('Pershendetje nga te gjithe\n');
    sendLine()
})

client.on('data', (data)=>{
    console.log("Serveri pranoi mesazhin " + data)
    sendLine()
})

function sendLine(){

    let buffer;
    let path;
    const line1 = readline.question("\nEmri juaj\t");
    const line2 = readline.question("Password-i\t");

    if(line1===admin&&line2===password){
        console.log("\n[1] Lexo, [2] Shkruaj, [3] Ekzekuto")
        const type = readline.question("\nZgjedh\t");
        const line = readline.question("\nShkruaj dicka...\t");
        client.write(line)
      switch(type) {
        case '1' :
            path = process.cwd();
            buffer = fs.readFileSync("text.txt");
            console.log(buffer.toString());
            client.end()
          break;
        case '2' :
            const content = 'Ke shkru dicka!'
            fs.appendFile('text.txt', content, err => {
            if (err) {
              console.error(err)
              return;
              }
             })
            break;
        case '3' :
            console.log("Ekzekuto")
            break;

          default:
           console.log("ERROR! Shkruaj njerin nga opsionet: 1, 2 ose 3!!");
}
    }
    else{
        path = process.cwd();
        buffer = fs.readFileSync("text.txt");
        console.log(buffer.toString());
        client.end()
    }   
}
