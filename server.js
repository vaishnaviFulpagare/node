const http = require('http');
const uc= require('uppercase')

http.createServer((req,res)=>{
   res.writeHead(200, {'content-type':'text/html'});
   res.write(uc('<h1>hello world</h1>'));
   
   res.end();
}).listen(5000);




