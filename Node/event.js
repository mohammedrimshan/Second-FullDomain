const EventEmitter = require('events')
const eventEmitter = new EventEmitter()
eventEmitter.on('greet',(name)=>{
    console.log(`Hello,${name}`)
})

eventEmitter.on("by",(name)=>{
    console.log(`Good By ${name}`)
})

eventEmitter.once('connect', () => {
    console.log('Connected to the server!');
  });
  

eventEmitter.emit('greet',"alice")
eventEmitter.emit('by',"shanu")
eventEmitter.emit('connect'); 
