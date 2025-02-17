
console.log(a);

var a = 40;
console.log(a);

var a = "r";
console.log(a);

var a = "undefined";
console.log(a);

a = "null";
console.log(a);

a = "boolean";
console.log(a);


console.log("====================================================================================");

// console.log(b);  cant initialize before as it is let

let b = 40;
console.log(b);

b = "r";
console.log(b);

b = "undefined";
console.log(b);

b = "null";
console.log(b);

b = "boolean";
console.log(b);

console.log("====================================================================================");


const funcs = [
  function () {
    console.log("Function in an array!");
  }, "string", 2
];

// calling as a loop to print all elements

funcs[0](); // Output: Function in an array!

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]);
}

// call indexes seperately

console.log(funcs[2]);
console.log(funcs[1]);

console.log("=================================Immediately Invoked Function Expression (IIFE)===================================================");

(function () {
  console.log("I am invoked immediately!");
})();

console.log("====================================Through an Object Property: ================================================");

const obj = {
  sayHi: function () {
    console.log("Hi from an object property!");
  }
};

obj.sayHi(); // Output: Hi from an object property!


console.log("====================================================================================");


