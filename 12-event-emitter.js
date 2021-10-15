const EventEmitter =require('events');

const customEmiter = new EventEmitter()

customEmiter.on('response',(name,id)=>{
    console.log(`data received, user: ${name} - His id is: ${id}`)
})

customEmiter.on('response',()=>{
    console.log('some other logic here')
})

customEmiter.emit('response','John',34) 