
a();  // a called
b();  //b as a variable will give undefined


//===================================function statement or function declaration================================================

function a(){
    console.log("a called");
}
a();   // a called



//==================================function expression =====================================================================
// function acts like a value

var b = function (){   //same for let and const
    console.log("anonymous fn called"); //anonymous function used as value
}
b();  //anonymous fn called




//=================================anonymous fiunctions =====================================================================
//function without a name, not have its own identity
//used in a place where functions are used as values like function expression

// function (){

// }



//=======================================function expression =====================================================================

var b = function xyz(){
    console.log("anonymous fn called"); //anonymous function used as value
}
b(); 
xyz(); //reference error ------as xyz is local funciton



//====================difference between parameter an arguments===========================================

var b = function (parameter1 , parameter2){ // the identifier which gets the arguments = parameters 
    console.log("anonymous fn called"); //anonymous function used as value
}
b(arg1, arg2);  //value which passed inside function = argumement


//=====================================first class functions===================================
//all the below things make the functions as the first class citizens
//the ability of functions to be used as values,,, and can be passed as an argument in another functions,,,can be returned from the functions =this ability is known as first classed fun

//functions inside functions passed as arguments
var b = function (param1){
    console.log(param1);
}
function xyz(){

}
b(xyz);  // passed anotehr function to the local function parameter 

//return a function from function
var b = function (param1){
    return function(){     //or ==>return function xyz(){} <== named fun can also be returned
    }
}
console.log(b());


//==================================arrow funtions===from EcmaScript 2016 ES6===============================================================

const sum = (a,b) => a+b;
console.log(sum(4,5));


//==================================callback fn===============================
setTimeout(function(){
    console.log("timer");   //is the callback fn
}, 5000);

function x(y){
    y()
}
x(function (){
console.log("y");
})

//==================================event listners in callback===============================

function attachEventListenrs(){
    let count = 1;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("Button clicked", count++);
});
}

attachEventListenrs();

//================================================================================================