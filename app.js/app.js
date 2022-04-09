var http = require('http');

//creat a server object:

let listener = function(req,res){
    res.write('Olá,Mundo!');
    console.log('respondendo ao navegador')
    res.end();
}
let porta = 8081
// http://localhost:8081/
http.createServer(listener).listen(porta);