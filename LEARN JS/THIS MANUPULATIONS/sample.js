"use strictmode"

let brideName = {
    firstName: "Aiswarya",
    lastName: "Lakshmi K M",
};

let groomName = {
    firstName: "Deepak",
    lastName: "Sasidharan",
};

//cant use the arrow function, the this inside the arrow function in printFullName does not refer to the object passed using .call(). 
//Instead, it refers to the this value of the enclosing lexical scope, which in a global scope typically refers to undefined (in strict mode) or the global object (window in browsers).

let printThierName = function(homeTown, District){
    console.log(this.firstName + " " +this.lastName + " from " + homeTown + " , " + District)
};

//call method 
printThierName.call(brideName, "Tirur", "Malappuram");
printThierName.call(groomName, "kizhakkanpattukara", "Trissur");

//apply method we use array to give the arguments
printThierName.apply(brideName, ["Tirur", "Malappuram"]);
printThierName.apply(groomName, ["kizhakkanpattukara", "Trissur"]);

 //bind method- -diff with call is only that bind will take a copy of a method and it can be invoked later
let printHerName = printThierName.bind(brideName, "Tirur", "Malappuram");
printHerName();
let printHisName = printThierName.bind(groomName, "kizhakkanpattukara", "Trissur");
printHisName();


//// this inside the arrow function=============================================

const obj = {
    a: 10,
    x: () => console.log(this),
}
obj.x(); //give the enclosing lexical environment of arrow fn (obj) here as global in nodejs & window in browser
//Arrow functions do not have their own this. Instead, they inherit this from the enclosing lexical scope, which, in this case, is the global scope (window in browsers or global in Node.js).

const obj2 = {
    a: 20,
    x: function(){
        const y = () => console.log(this);
        y();
    }
};
obj2.x(); // give the enclosed lexical environment of arrow function (obj2).
