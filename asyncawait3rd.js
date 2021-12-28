const {readFile,writeFile}=require('fs').promises

const start= async()=>{
    try{
      const first=await readFile('./filePath/first.txt','utf8');
      const second=await readFile('./filePath/second.txt','utf8');

      await writeFile('./filePath/result.txt',`this is 3nd approach ${first} ${second}.`,{flag:'a'})

      console.log(first,second);

    }
    catch(error){
        console.log(error);
    }
}
start();