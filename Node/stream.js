// const writeStream = fs.createWriteStream('new.txt')
// writeStream.write("this is large file\n");
// writeStream.write("More Data beign \n");
// writeStream.end()
// writeStream.on("finish",()=>console.log("Large file"))



// const readStream = fs.createReadStream('new.txt','utf8')
// readStream.on("data",(chunk)=>{
//     console.log("Recieved chunk:",chunk)
// })

// readStream.on('end',()=>{
//     console.log("finished read")
// })
// readStream.on('error', (err) => {
//     console.error('Error reading file:', err);
// });


// const readStream = fs.createReadStream('index.txt','utf8')
// const writeStream = fs.createWriteStream('output.txt')
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk.toUpperCase())
// });

// readStream.on('end',()=>{
//     console.log("Completed")
// })


//Duplex
// const {Duplex} = require('stream')
// const duplexStream = new Duplex({
//     read(size){
//         this.push("hello");
//         this.push(null);
//     },
//     write(chunk,encoding,callback){
//         console.log(chunk.toString());
//         callback()
//     }
// })

// duplexStream.write("Node.js Streams");
// duplexStream.on('data', (chunk) => {
//     console.log("Readable Stream Output:", chunk.toString());
// });



//Transform
// const { Transform } = require('stream');
// const transformStream = new Transform({
//   transform(chunk, encoding, callback) {
//     this.push(chunk.toString().toUpperCase());
//     callback();
//   }
// });

// transformStream.on('data', (chunk) => {
//     console.log("Readable Stream Output:", chunk.toString());
//   });

//   transformStream.write("Node.js Streams");
//   transformStream.end();



//Piping
const { Transform } = require('stream');
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
const fs = require('fs');
const readableStream = fs.createReadStream('index.txt');
const writableStream = fs.createWriteStream('new.txt');
readableStream.pipe(transformStream).pipe(writableStream);
writableStream.on('finish', () => {
    console.log("Transformation complete! Check 'new.txt'");
  });