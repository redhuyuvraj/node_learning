const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url == "/"){
        res.writeHead(200 , {"content-type" :"text/plain"});
        res.end("Home page")
    }if(url == "/profile"){
        res.writeHead(200 , {"content-type" :"text/plain"});
        res.end("profile page")
    }else{
        res.writeHead(404 , {"content-type" :"text/plain"});
        res.end("NOT FOUND")
    }
});

const port = 3000;
server.listen(3000 , ()=>{
    console.log(`server is listening to port ${port}`);
})