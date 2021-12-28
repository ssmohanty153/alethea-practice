const http=require('http');

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.end("this is a home page");
    }
    if(req.url==='/about'){
        res.end("this is a about page")
    }
    res.end(`
    <h1>opps!</h1>
    <p>we are not finding this page</p>
    `)
})
server.listen(3000);//http://localhost:3000/