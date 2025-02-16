//Cors implementation
// const expess = require('express')
// const cors = require('cors')
// const app = expess()

// app.use(cors({origin:`http://localhost:5153`}))

// app.get("/", (req, res) => {
//     res.send("CORS is enabled!");
//   });

// app.listen(3001,()=>{
//     console.log(`the server on http://localhost:3001`)
// })


//Application Middleware
// const express = require('express')
// const app = express()

// app.use((req,res,next)=>{
//     console.log("Logged in",Date().toString())
//     next()
// })

// app.get('/',(req,res)=>{
//     res.send("THIS IS LOGIN PAGE")
// })


// const PORT = 4000
// app.listen(PORT,()=>{
//     console.log(`server on http://localhost:${PORT}`)
// })


//Route Middleware
// const express = require('express')
// const router = express.Router()

// router.use((req,res,next)=>{
//     console.log(`The user logged in this route`,new Date())
//     next()
// })

// router.get('/user',(req,res)=>{
//     res.send(`YOU ARE LOGGED USER ROUTE`)
// })

// const app = express()
// app.use('/api', router);
// const PORT = 4000
// app.listen(PORT,()=>{
//     console.log(`server on http://localhost:${PORT}`)
// })


//Error-Handling Middleware
// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     throw new Error('Something went wrong!');
//   });
  
// app.use((err,req,res,next)=>{
//     console.error(err.stack);
//     res.status(500).send(`Something happen`)
// })

// const PORT = 4000
// app.listen(PORT,()=>{
//     console.log(`server on http://localhost:${PORT}`)
// })


// Custom Middleware
// const express = require("express");
// const app = express();

// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.url}`);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });




