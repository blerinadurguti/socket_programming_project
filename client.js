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
            console.log("Ekzekuto")
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
