//Higher-Order Function Accepting Functions as Arguments

function operate(a,b, operation){  //operate is HOF
    return operation (a,b); // Executes the passed function
}

// Functions to pass as arguments
function add(x,y){  
    return x+y ;
}
function multiply(x,y){
    return x*y ;
}

// Using the higher-order function
console.log(operate(3,4, add));
console.log(operate(3,4, multiply));

////////////////////////////////////////////////////////////////////////////////////
//Higher-Order Function Accepting Functions as Arguments


function createMultiplier(multiplier , number){
    return multiplier(number);
}
function doublevalue(number){
return 2*number;
}
function tripplevalue(number){
    return 3*number;
    }

console.log(createMultiplier(doublevalue,5));
console.log(createMultiplier(tripplevalue,5));

//=====================================================================================================================

//Higher-Order Function returns a Function 

// Higher-order function
function createMultiplier(multiplier) {
    return function operation (number) {
        return number * multiplier; // Returns the product
    };
}

// Using the higher-order function
const double = createMultiplier(2);  // Returns a function that doubles a number
const triple = createMultiplier(3);  // Returns a function that triples a number

console.log(double(5)); // Output: 10 (5 * 2)
console.log(triple(5)); // Output: 15 (5 * 3)

//======================================================================================================================

const callMe = (message) => {
    console.log(message);
};

const orderCoffee = (callback) => {
    console.log("ordering coffee...");
    
    return setTimeout(() => {
        callback("your coffee is ready");
    },2000);
};
orderCoffee(callMe);

//======================================================================================================================
