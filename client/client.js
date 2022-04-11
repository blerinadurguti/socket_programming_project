const net=require('net');
const { send } = require('process');
const readline=require('readline-sync')
const fs = require('fs')

const options={
    port:3000,
    host: '10.180.100.45'
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
    console.log("Serveri pranoi mesazhin! " + data)
    sendLine()
})

client.on('error', (err)=>{
    console.log(err.message)
})

function sendLine(){
    
    var line1=readline.question("\nEmri juaj\t")
    var line2=readline.question("Password-i\t")

    if(line1===admin&&line2===password){
        console.log("\n[1] Lexo, [2] Shkruaj, [3] Ekzekuto")
        var type=readline.question("\nZgjedh\t")
        var line=readline.question("\nShkruaj dicka...\t")
    client.write(line)
      switch(type) {
        case '1' :
            var path = process.cwd();
            var buffer = fs.readFileSync("C:/Users/PC/Documents/GitHub/socket_programming_project/server/text.txt");
            console.log(buffer.toString());
            client.end()
          break;
        case '2' :
            const content = 'Ke shkru dicka!'
            fs.appendFile('text.txt', content, err => {
            if (err) {
              console.error(err)
              return
              }
             })
            break;
        case '3' :
            const PythonShell = require('python-shell').PythonShell;

            PythonShell.run('main.py', null, function (err) {
              if (err) throw err;
              console.log('finished');
            });
            break;

          default:
           console.log("ERROR! Shkruaj njerin nga opsionet: 1, 2 ose 3!!");
}
    }
    else{ 
        var path = process.cwd();
        var buffer = fs.readFileSync("C:/Users/PC/Documents/GitHub/socket_programming_project/server/text.txt");
        console.log(buffer.toString());
        client.end()
    }   
}
