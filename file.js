// const john="john";
// const prety="prety";

// const sayHi=(name)=>{
//     console.log(`hello ${name}`);
// }

// sayHi("subhransu");
// sayHi(john);
// sayHi(prety);

const names = require('./4-export');
const sayHi = require('./5-util');

const person=require('./ulternative');

require('./mindgrenade');

console.log(person);
sayHi(names.john);
sayHi(names.prety);
sayHi("subhransu");
