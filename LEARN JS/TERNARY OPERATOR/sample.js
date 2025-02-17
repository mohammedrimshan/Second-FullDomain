let age = 3;
let canVote = age >= 18 ? "Yes, you can vote" : "No, You can't vote";
console.log(canVote);



let score = 80;
let result = score >= 90 ? "A"
    : score >= 80 ? "B"
    : score >= 70 ? "C"
    : "F";

console.log(result);



function checkNumber (num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkNumber(20));
console.log(checkNumber(-20));
console.log(checkNumber(0));



const x = function checkNumber (num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(x(20));
console.log(x(-20));
console.log(x(0));


function greet (name ="Aishu"){
    console.log("Hii.." + name);
};
greet ();