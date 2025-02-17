const arr = [5, 1, 3, 2, 6];

console.log("=================================================map===============================================");

//eg--double, tripple, binary elements full

function findDouble(arr) {
    let double = [];
    for (let i = 0; i < arr.length; i++) {
        double.push(2 * arr[i]);
    }
    return double;
}
console.log('Doubled array:', findDouble(arr));


console.log("================================================================================================");


const result = arr.map(function double(x) {
    return 2 * x;
});
console.log('Doubled array:', result);

console.log("================================================================================================");


const result2 = arr.map((x) => 2 * x);
console.log('Doubled array:', result);


console.log("================================================================================================");



const result3 = arr.map(function binary(x) {
    return x.toString(2);
});
console.log('Binary Numbers:', result3);
//-----------
const result4 = arr.map((x) => x.toString(2));
console.log('Binary Numbers:', result4);


console.log("=================================================filter===============================================");


//eg--odd, even, lessthan or greaterthan elements, filterd elements

const output1 = arr.filter(function isOdd(x) {
    return x % 2 !== 0;
});
console.log('Odd Numbers:', output1);

const output5 = arr.filter((x) => x % 2 === 0);
console.log('Even Numbers:', output5);

const output4 = arr.filter(function greaterThan4(x) {
    return x > 4;
});
console.log('Greater thahn 4:', output4);


console.log("=================================================reduce===============================================");


let odd = [];
let even = [];
let index =[];

const output3 = arr.forEach(function isOdd(x,i) {
    if (x % 2 !== 0) {
        odd.push(x);
        index.push(i)
    } else {
        even.push(x);
    }
});
console.log('Odd Numbers:', odd);   // Logs: Odd Numbers: [1, 3, 5, 7, 9]
console.log('Even Numbers:', even);


console.log("=================================================reduce===============================================");

//eg-- sum and max 

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log('Sum of Numbers:', findSum(arr));

//-------

const output = arr.reduce(function findSum(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);  //function and 0 here is the arguments which we passed to the function reduce.
console.log('Sum of Numbers:', output);

//-----

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max < arr[i];
        max = arr[i]
    }
    return max;
}
console.log('Max Number is:', findMax(arr));

//==== 
const output8 = arr.reduce(function findMax(max, curr) {
    if (max < curr);
    max = curr;
    return max;
}, 0);  //function and 0 here is the arguments which we passed to the function reduce.
console.log('Max Number is:', output8);

console.log("=================================================object map reduce and fiter===============================================");

const user = [
    { firstName: "aiswarya", lastName: "Lakshmi", Age: 27 },
    { firstName: "sneha", lastName: "venugopal", Age: 22 },
    { firstName: "sudhev", lastName: "syd", Age: 24 },
    { firstName: "aparna", lastName: "xxx", Age: 23 },
];

const output9 = user.map((x) => x.firstName + " " + x.lastName);
console.log('fullName:', output9);

//==============
const output2 = user.reduce((acc, curr) => {
    if (acc[curr.Age]) {
        (acc[curr.Age]) += 1;
    } else {
        acc[curr.Age] = 1;
    }
    return acc;
}, {});
console.log('Age sorted', output2);
//=====================================================
let words = ['one','two','three','four','five','six','seven','eight'];


let obj = {}
for(let val of words){
    let count=0
    for(i=0;i<val.length;i++){
        if(val[i] === "e"){
            count++
        }
        
    }
    obj[val] = count
}

console.log(obj)

//=================================================
let words = ['one','two','three','four','five','six','seven','eight',"two","two"];

let result = words.reduce((acc,curr)=>{
    let count = 0 
    for (val of curr){
        if(val==="e"){
            count++
        }
    }
    acc.push({word: curr, count:count})
    return acc
    
},[])

console.log(result)
//==============

let words = ['one','two','three','four','five','six','seven','eight',"two","two"];

let result = words.reduce((acc,curr)=>{
    let count = 0 
    for (val of curr){
        if(val==="e"){
            count++
        }
    }
    acc[curr] =count
    return acc
    
},{})

console.log(result)
//============

const output6 = user.filter((x) => x.Age < 25).map((x) => x.firstName + " " + x.lastName);
console.log('Age lessthan 25 are', output6);

//============

const output7 = user.reduce(function (acc, curr) {
    if (curr.Age < 25) {
        acc.push(curr.firstName + " " +curr.lastName);
    }
    return acc;
}, []);
console.log('Age lessthan 25 are', output7);



console.log("=================================================first letter of string to capital===============================================");


let arrayString = ["str","sudhe","bghk","car","bus"];

let firstCapital = arrayString.map ( (x) => {
    return x.charAt(0).toUpperCase() + x.slice(1);
});
console.log(firstCapital);

//================================================

let numberArray = [1,2,3,4,5];

let multipleIndexElement = numberArray.map ((value,index) => {
    return value * index;
});
console.log(multipleIndexElement);

//===============================================


const arr = [5, 1, 3,9,7,5,2, 2, 6];


let val = arr.filter((val)=>{
    if (val<2) return false
    for(let i= 2; i<=Math.sqrt(val); i++){
        if(val%i === 0) return false
    }
    return true
})

console.log(val)

//======================

const arr = [5, 1, 3,9,7,5,2, 2, 6];

let r = arr.reduce((acc,val) => {
    if (val<2) return acc
    let isPrime = true
    for (let i=2; i<=Math.sqrt(val); i++){
        if(val%i === 0) {
            isPrime = false
            break;
        }
    }
    if(isPrime) acc.push(val)
    return acc
},[])

console.log(r)
