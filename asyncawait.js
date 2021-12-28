const {readFile}=require("fs");
const { result } = require("lodash");


const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf8",(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}
//(1)
// getText('./filePath/first.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err))
//2
 const start=async()=>{
     try{
         const first=await getText('./filePath/first.txt');
         console.log(first);
     }
     catch (error){

     }
 }
start();
