const EventEmiter=require('events');

const customEmitter = new EventEmiter();


customEmitter.on('response',(name,id)=>{
    console.log(`data recived form ${name} which age is ${id}`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response','john',25);