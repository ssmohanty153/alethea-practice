const {readFile,writeFile}=require('fs');

readFile('./first.txt',"utf8",(err,result)=>{
    if(err){
        console.log(err);
        return
    }

const first=result

readFile('./second.txt',"utf8",(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second=result

    writeFile('./result.txt',`Hi this is all file:${first} ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(result);

    })
})
})
