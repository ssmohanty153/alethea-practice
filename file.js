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
sayHi(names.john);
sayHi(names.prety);
sayHi("subhransu");
