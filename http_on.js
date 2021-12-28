const http=require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    res.end("welcome to alethea")
})

server.listen(3000);