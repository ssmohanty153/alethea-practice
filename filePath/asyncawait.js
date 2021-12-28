const { readFile ,writeFile} = require("fs")

readFile('./first.txt',"utf8",(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    readFile('./second.txt',"utf8",(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result;

        writeFile('./result.txt',`here is async ans await result ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("done with this task");
        })

    })

})
console.log("start a new task");