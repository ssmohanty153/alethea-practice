const express = require('express');

const app=express();


app.get('/',(req,res)=>{
res.status(200).send("hello world");
req.end();
})

app.get('/about',(req,res)=>{
    res.status(200).send("about page");
    res.end();
})

app.get('*',(req,res)=>{
    res.status('404').send('page not found');
})

app.listen(3000,()=>{
    console.log("server connected to 3000");
})