//Node server
const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'})
    res.end("Hello, welcome!!!!!!!!!!!!")
})

const port = 4000
server.listen(port,()=>{
    console.log(`server on http://localhost:${port}`)
})


//Express server
const expess = require('express')
const app = expess()

app.get('/',(req,res)=>{
    res.setHeader("content-type",'application/json');
    res.send("The data")
})

app.get('/user/:name/:age',(req,res)=>{
    const {name,age} = req.params
    res.send(`the name is ${name} and age is ${age}`)
})


app.get('/add',(req,res)=>{
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    if(!num1 || !num2){
        return res.status(400).json({error:"invalid"})
    }
    const sum = num1+num2
    res.send(`the sum of ${num1} and ${num2} is ${sum}`)
})

app.get('/admin/:id',(req,res)=>{
    const {id} = req.params;
    const {name,age} = req.query
    const sum = Number(id) + Number(age)
    res.send(`User ID is ${id} , ${sum} Name:${name} and Age:${age}`)
})


app.listen(3000,()=>{
    console.log(`the server on http://localhost:3000`)
})