//A Function Statement, also known as a Function Declaration, is used to define a function using the function keyword. It is hoisted, meaning it can be called before it is defined in the code.

function Greet(name){
    return `Hello ,${name}`
}

console.log(Greet("Rimshan"))


//A Function Expression is when a function is assigned to a variable. Unlike Function Declarations, Function Expressions are not hoisted, meaning they cannot be called before being defined.

const sayHello = function(name){
    return `How are you , ${name}`
}

console.log(sayHello("rimshan"))


// A Named Function Expression (NFE) is a function expression that has a name. This name is only available inside the function itself, making it useful for recursion or debugging.

const factorial = function fact(num){
    if(num===0){
        return 1
    }
    return num*fact(num-1)
}

console.log(factorial(5))


//An Anonymous Function is a function without a name. It is usually assigned to a variable or used as a callback function.

const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Rimshan"));


// First-Class Functions mean that functions are treated like values. They can be:
// ✔ Assigned to variables
// ✔ Passed as arguments
// ✔ Returned from other functions

//Passing a Function as an Argument
function calculate(a,b,callback){
    return callback(a,b)
}

function add(x,y){
    return x+y
}

console.log(calculate(5,6,add))
//Returning a Function from Another Function
function multiplier(factor){
    return function(num){
        return num*factor
    }
}

const double = multiplier(3)
console.log(double(6))


//A First-Order Function is a function that does not take another function as an argument or return a function. It simply operates on data and returns a value.

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4)); 
console.log(isEven(7));


//A Higher-Order Function (HOF) is a function that takes another function as an argument OR returns a function.

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);
console.log(squared);


//Arrow functions (=>) are a modern way to write functions in JavaScript. They are shorter, have implicit returns, and do not have their own this.they lexically bind this, meaning that they inherit this from the surrounding (enclosing) scope at the time they are defined. 


const adding = (a, b) => a + b;
console.log(adding(5, 3));

// Normal Function (Own this)
const person = {
    name: "Rimshan",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

person.greet(); 

//Arrow Function (No Own this)
const person2 = {
    name: "Rimshan",
    greet: () => {
        console.log(`Hello, I am ${this.name}`);
    }
};

person2.greet();

//A Generator Function allows you to pause and resume execution using the yield keyword. It is declared using function* (with an asterisk * after function).

function* Counter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

const counter = Counter();
console.log(counter.next().value); 
console.log(counter.next().value); 
console.log(counter.next().value); 


//A Self-Invoking Function (IIFE - Immediately Invoked Function Expression) runs immediately after being defined. It does not need to be called explicitly.

(function() {
    console.log("I am an IIFE!");
})()


const counters = (function() {
    let count = 0;
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        }
    };
})();

counters.increment(); 
counters.increment();
counters.decrement();

//A Self-Invoking Function (also known as an Immediately Invoked Function Expression or IIFE) is a function that runs immediately after it is defined.

(function(){
    console.log("Self-Invoking Function")
})();

(function(name){
    console.log(`My name is ${name}`)
})("SHANU");


(()=>{
    console.log(`WHAT HAPPENDED`)
})();


//closure
//A closure allows a function to "remember" and access its lexical scope (the environment in which it was created) even when that function is executed outside its original scope. In simpler terms, a closure gives you access to an outer function's scope from an inner function.

function Outer(){
    let message = "HELLO I'M OUTER FUNCTION"
    function Inner(){
        console.log(message)
    }
    return Inner
}

const closureEx = Outer();
closureEx()


function Counters(){
    let counts = 0;
    return function(){
        counts++
        console.log(counts)
    };
}

const increment = Counters()
increment()
increment()
increment()


