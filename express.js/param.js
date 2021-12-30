const express=require('express');

const app=express();

const {products}=require('./data1');




app.get('/',(req,res)=>{
    res.json([{book:'mkdir',auther:'subhransu'}]);
})

app.get('/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,title,price} = product;
        return{id,title,price};
    })
    res.json(newProducts);
})

app.listen(3000,()=>{
    console.log("server connected to 3000 ");
})