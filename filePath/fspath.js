const { readFileSync,writeFileSync } = require("fs")

const first=readFileSync('./first.txt',"utf-8");
const second=readFileSync('./second.txt',"utf-8");

writeFileSync('./result.txt',`Here is first code  ${second} ${first}.`)

