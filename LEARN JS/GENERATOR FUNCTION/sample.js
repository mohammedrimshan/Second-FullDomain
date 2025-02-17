function* infiniteGenerator() {
  let i = 0;
  while (true) {
    yield i++; // Keeps incrementing and yielding
  }
}

const gen = infiniteGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// and so on...


function* infiniteGenerator() {
  let i = 5;
  while (i >= 1) {
    yield i--; // Keeps incrementing and yielding
  }
}

const gentr = infiniteGenerator();
console.log(gentr.next());
console.log(gentr.next());
console.log(gentr.next());
console.log(gentr.next());
console.log(gentr.next());
console.log(gentr.next());
// and so on...


console.log("=================================================== =======================================");


function* arrayIterator(array) {
  for (const item of array) {
    yield item;
  }
}


const array2 = ['a', 'b', 'c', 'd', 'e']
const genr = arrayIterator(array2);
console.log(genr.next().value); // 'a'
console.log(genr.next().value); // 'b'
console.log(genr.next().value); // 'c'
console.log(genr.next().value);
console.log(genr.next().value);

console.log("======================================================= =======================================");


function* dynamicGenerator() {
  const first = yield 'Enter first number'; // Paused
  const second = yield 'Enter second number'; // Paused
  return first + second; // Completes
}

const genra = dynamicGenerator();

console.log(genra.next().value); // "Enter first number"
console.log(genra.next(5).value); // "Enter second number"
console.log(genra.next(10).value); // 15


console.log("==============================================syntax =======================================");


function* simpleGenerator() {
  yield "First value";
  yield "Second value";
  return "Done"; // Terminates the generator
}

const generator = simpleGenerator();

console.log(generator.next()); // { value: 'First value', done: false }
console.log(generator.next()); // { value: 'Second value', done: false }
console.log(generator.next()); // { value: 'Done', done: true }


console.log("============================================generator function array while loop =======================================");


function* printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];  // Yield each element
  }
}

const fruits = ['apple', 'banana', 'orange'];
const fruitGenerator = printArray(fruits);

console.log(fruitGenerator.next());  // manually printing

// by a while loop 
let result = fruitGenerator.next(); //initializing
while (!result.done) {  //if the done is false
  console.log(result.value);  // Print the value only, not along with the done 
  result = fruitGenerator.next();  // Move to the next value
}


console.log("===================================================generator function array for loop=======================================");


function* printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]; // Yield each element
  }
}

const fruits1 = ['apple', 'banana', 'orange'];
const fruitGenerator1 = printArray(fruits1);


// for (let val of fruitGenerator1){
//   console.log(val)
// }

for (let result = fruitGenerator1.next(); result.done == false; result = fruitGenerator1.next()) {  // !result.done
  // console.log(result.value); // Print each fruit
  console.log(result); // Print object
}

console.log("================================================================== =======================================");


function* gen(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

let arr = [3, 4, 5, 6, 7]
let fn = gen(arr)


let result = fn.next();
do {
  console.log(result.value)
  result = fn.next();
} while (result.done === false)

//==============================================================
function* generator() {
  function sent() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let result = [];
        for (let i = 1; i <= 10; i++) {
          result.push(i * 5);
        }
        resolve(result.reverse().filter(val => !(val % 2)));
      }, 3000);
    });
  }
  yield sent();
}

let generate = generator();

generate.next().value.then(async (result) => {
  // Asynchronous function to delay printing each value
  for (const val of result) {
    console.log(val); // Print each value
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay by 1 second
  }
});

//=====================================================

function* gen(){
  for(let i=0;i<=10;i++){
      yield new Promise((resolve)=> {
          setTimeout(() => {
              resolve(i)
          },1000)
      })
  }
}

async function printValues() {
  const gen = delayedGenerator();
  
  for (let promise of gen) {
    const value = await promise;
    console.log(value);
  }

  //or

// for await (let value of gen) {
//   console.log(value);
// }
}



printValues();
