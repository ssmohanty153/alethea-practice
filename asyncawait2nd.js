const {readFile,writeFile}=require('fs');

const util=require('util');

const readFileAsync=util.promisify(readFile);
const writeFileAsync=util.promisify(writeFile);

const start=async()=>{
    try{
        const first=await readFileAsync('./filePath/first.txt','utf8');
        const second=await readFileAsync('./filePath/second.txt','utf8');

        await writeFileAsync('./filePath/result.txt',`this is awesome ${first}  ${second}`);

        console.log(first,second);


    }
    catch(error){
        console.log(error);
    }
}
start()