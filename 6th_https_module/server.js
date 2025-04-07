 const http = require("http");

 const server = http.createServer((req,res) => {

    console.log(req , 'res');
    res.writeHead(200 , {'content-type' : 'text/plain'});
    res.end('my name is Yuvraj'); 
 });

 const port = 3000;
 server.listen(port , () =>{

    console.log(`server is now listening to port ${port}`);
 
 });