const express= require('express');
const app=express();
const {products}=require('./data1');

app.get('/',(req,res)=>{
    res.json([{book:'mkdir',auther:'subhransu'}]);
})
app.get('/data',(req,res)=>{
    res.json(products);
    console.log(products)
})
app.listen(3000,()=>{
    console.log("Server connected to 3000 port");
})