//started operating system process
console.log('first')
setTimeout(()=> {
    console.log('second')
}, 3000)

console.log('third')
//complete and exitet operating system



//Another file here!!!!@
const http = require('http');
const server = http.createServer((req, res)=>{
if (req.url==='/'){
    res.end("home page")

}
if(req.url==='/about'){
    res.end('about page')
    //blocking code
    for (let i = 0; i < 1000; i++){
        for (let j = 0; j<1000; j++){
            console.log(`${i} ${j}`)
        }
    }
}
 
})
server.listen(5000,()=>{
    console.log('server is listening on port 5000...')
}) 