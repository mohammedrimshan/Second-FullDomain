//=========================================arrow fn======================================================

const resultSum = (num1,num2) => num1 * num2 ;
console.log(resultSum(10,20));

//====================================IIFE=============================increment and decrement=============================================================================

const counter = function () {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
    };
}();

counter.increment();
counter.increment();
counter.decrement();

//======================================================================print unique number=====================================================

let array1 = [3, 3, 4, 4, 677, 56, 4, 7, 1, 2, 2, 3];

function uniqueNumbers() {
    const sortedArray = array1.slice().sort((a, b) => a - b);  //split(' ') will change the string to array without the space, and splice() will create a copy of the array without modifying the original array.
    console.log(`sorted array is : ${sortedArray}`);

    let uniqueArray = [];

    for (i = 0; i < sortedArray.length; i++) {
        if (i === 0 || sortedArray[i] != sortedArray[i - 1]) {
            uniqueArray.push(sortedArray[i]);
        };
    };

    console.log("unique numbers of the array is : ", uniqueArray);
};

uniqueNumbers();

//=========================================================================filter and print unique==================
array7 = [1, 2, 3, 4, 5, 6, 6]



const result1 = array7.filter ((value, index, array) => {
    return array.indexOf(value) === index ;
});




//======================================================================print unique number================================================================
let array2 = [3, 3, 4, 4, 677, 56, 4, 7, 1, 2, 2, 3];

function uniqueSortedArray(array) {
    // Remove duplicates using Set
    const uniqueSet = new Set(array); //unique set is an object

    // Log the unique set
    console.log(`Set created is: ${[...uniqueSet]}`);

    // Convert Set back to array and sort it
    const SortedUniqueSet = [...uniqueSet].sort((a, b) => a - b);

    console.log("Unique sorted array:", SortedUniqueSet);
    return SortedUniqueSet; // Return it if needed
}

// Call the function with the array
uniqueSortedArray(array2);


//===========
//const uniqueSortArray = [...new Set(array2)].sort((a,b) => a-b)
//=======================================================================print unique number=========================================================================

let arr = [3, 3, 4, 4, 677, 56, 4, 7, 1, 2, 2, 3];

for (let i=0; i<arr.length; i++){
    for (let j=i; j<arr.length; j++){
        if(arr[i]> arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log(`sorted array is : ${arr}`);

let uniqueArray = []
let count = 0
for(let  i=0; i<arr.length; i++){
    if(i===0 || arr[i] != arr[i-1]){
        uniqueArray[count] = arr[i]
        count++
    }
}

console.log(uniqueArray)

//=======================================================================sum of elements in nested object=========================================================================


const obj = { a: 3, b: [1, 2, 3], c: 10 };

let sum = 0;

for (let key in obj) {  //for object for in
    if (Array.isArray(obj[key])) {
        for (let num of obj[key]) {  //for array for of
            sum += num;
        };
    } else {
        sum += obj[key];
    };
};
console.log("The sum of the numbers: ", sum);

//=====================================================================frequency of elements in an array using object and array iteration========================================

const array3 = [4, 4, 4, 4, 1, 2, 2, 3, 3, 3];

let frequencyObject = {};

for (let values of array3) {
    if (frequencyObject.hasOwnProperty(values)) {  //if obj has a key 4  OR if (frequency[values]){
        frequencyObject[values] += 1;
    } else {
        frequencyObject[values] = 1
    }
};
console.log("The frequency is :", frequencyObject);

//-------------------------------------------------------------------------

const array7 = ['cat', 'dog', 'cat', 'bird', 'dog', 'dog', 'fish'];

let frequencyObject1 = {};

for (let value of array7) {
    if (frequencyObject1.hasOwnProperty(value)) { // Check if the key exists in the object
        frequencyObject1[value] += 1; // Increment the count
    } else {
        frequencyObject1[value] = 1; // Initialize the count to 1
    }
}

console.log("The frequency is:", frequencyObject1);

//------------------------------------------frequency of elements using reduce--------------------------------------

const array4 = [4, 4, 4, 4, 1, 2, 2, 3, 3, 3];

const frequency = array4.reduce((acc, value) => {
    if (acc[value]) {
        acc[value] += 1; // Increment count if key exists
    } else {
        acc[value] = 1;  // Initialize count if key doesn't exist
    }
    return acc; // Return the accumulator for the next iteration
}, {}); // Initialize the accumulator as an empty object

console.log("The frequency is:", frequency);


//============================

let words = ['one','two','three','four','five','six','seven','eight'];

let result = words.reduce((acc,curr)=>{
    let count = 0;
    for(let val of curr){
        if(val == 'e'){
            acc[curr] = ++count;
        }
    }
    return acc;
},{})

console.log(result)

//================================================================================function to reverse an array===============================================================

function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//-----------------------------------------------------------------

function arrayReversed(array) {
    let reversedArray = [];
    for (i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
console.log(arrayReversed([10, 20, 30, 40, 50]));

//======================================================================function to reverse a string===============================================================

function reverseString(string) {
    return string.split(' ').reverse().join(' ');
}
console.log(reverseString('a i s h u'));

//----------------------------------------------------------------

function stringRevered (string) {
    let  reverseString = '';

    for (i=string.length-1; i>=0; i--){
        reverseString += string[i];
    }
    return reverseString;
}
console.log(stringRevered('a i s w a r y a l a k s h m i k m'));

//=====================================================================================Add or remove property in an object=========================================

let student = {
    name: "Aishu",
    age: 27
};

student.dob = '21-02-1997';
delete student.age;

console.log(student);

//======================================================================================concat arrays======================================

let array5 = [3,4,5,6,6];
let array6 = [4,6,7,8,9];

let concatArray = array5.concat(array6);
console.log(concatArray);

//-------------------------------------spread-----------------------

let spreadArray = [...array5,...array6];
console.log(spreadArray);

//=========================================================================longest string in an array================================

let stringArray = ["apple", "banana", "orange", "kiwi", "strawberry", "23345566787895643"];

let longetsString = '';

for (let i=0; i<stringArray.length; i++){
    if (stringArray[i].length > longetsString.length){
        longetsString = stringArray[i]
    };
};
console.log(`longest string: ${longetsString}`);


//----------------------------reduce-------------------------

const longetsString2 = stringArray.reduce((longest,current) =>{
    if (current.length > longest.length){
        return current;
    }else{
        return longest;
    }
},' ');

console.log("longest string:",longetsString2);

//let result = stringArray.reduce((acc,curr) => stringArray[acc]> stringArray[curr] ? acc :curr)


//------------------------------for each-----------------------

let longetsString3 = "";

stringArray.forEach((str) => {
    if (str.length > longetsString3.length){
        longetsString3 = str;
    }
});
console.log(longetsString3);


//==============================================================generate an array with multiples of seven between 0 to 100==================================

let multiplesSeven = [];

for (i=0; i<=100; i += 7){
    multiplesSeven.push(i);
}

console.log(multiplesSeven);

//--------------------------------------------


let multiplesSeven1 = [];

for (i=0; i<=100; i++){
    if (i % 7 == 0)
        multiplesSeven1.push(i);
    }

console.log(multiplesSeven1);

//--------------------------------------------

let multiplesSeven4 = [];

for (i=0; i<=100; multiplesSeven4.push(i), i += 7); 

console.log(multiplesSeven4);

//======================================================================================terinary with return================================================================

function isEvenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log("four is :",isEvenOrOdd(4)); // Output: "Even"
console.log("Seven is :",isEvenOrOdd(7)); // Output: "Odd"

//===========================================================================split array into 2 equal halves=============================================

function splitArray (array){
    const mid = Math.ceil(array.length/2); //ensures that the first half gets the extra element if the array has an odd length.
    const firstHalf = array.slice(0,mid); //(start,end)
    const secondHalf = array.slice(mid);

    return [firstHalf,secondHalf];// Return both halves as an array
    
}

console.log(splitArray([1,2,3,4,5,6,7,7]));

//========================================================================remove keys from an object where the values are odd numbers=========================
const rollNumber = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
};

function removeOdd (obj) {
    for (const key in obj){
        if (obj[key] % 2 != 0){
            delete obj[key];
        }
    }
    return obj;
}

console.log("the object after deleting the odd values: ", removeOdd (rollNumber));

//==================================================================delete last key of object =============================================

const rollNumber1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6
};

function deleteLastKey(obj) {
    let lastKey;
    // Use for...in to iterate over the keys
    for (const key in obj) {
        lastKey = key; // Update lastKey during each iteration
    }
    if (lastKey) {
        delete obj[lastKey]; // Delete the last key-value pair
    }
    return obj;
}

console.log("Object before deleting last key:", rollNumber1);
console.log("Object after deleting last key:", deleteLastKey(rollNumber1));

//==================================================================filter out numbers from a mixed array =============================================

const mixedArray = [1, 'hello', true, 42, 'world', {}, 3.14, null, [5, 6], undefined];

const numbersOnly = mixedArray.filter(function(x) {
    return  typeof(x) === 'number';
}); 
//const numbersOnly = mixedArray.filter(x => typeof x === 'number');

console.log(`numbers from fixed array: ${numbersOnly}`);

//---------------------------------------

const mixedArray1 = [1, 'hello', true, 42, 'world', {}, 3.14, null, [5, 6], undefined];

let numbersOnly1 = [];  // This will hold the filtered numbers

for (let i = 0; i < mixedArray1.length; i++) {
    if (typeof mixedArray[i] === 'number') {  // Check if the current element is a number
        numbersOnly1.push(mixedArray1[i]);     // Add the number to the numbersOnly array
    }
}

console.log(`Numbers from mixed array: ${numbersOnly1}`);

//--------------------------------------------------

const mixedArray3 = [1, 'hello', true, 42, 'world', {}, 3.14, null, [5, 6], undefined];

let numbersOnly3 = [];  // This will hold the filtered numbers

mixedArray.forEach((item)=> {
    if (typeof item === 'number') {  // Check if the current element is a number
        numbersOnly3.push(item);      // Add the number to the numbersOnly array
    }
});

console.log(`Numbers from mixed array: ${numbersOnly3}`);

//----------------------------------------------------

const mixedArray4 = [1, 'hello', true, 42, 'world', {}, 3.14, null, [5, 6], undefined];

let numbersOnly4 = [];  // This will hold the filtered numbers

for (let item of mixedArray4) {
    if (typeof item === 'number') {  // Check if the current element is a number
        numbersOnly4.push(item);      // Add the number to the numbersOnly array
    }
}

console.log(`Numbers from mixed array: ${numbersOnly4}`);

//==============================================================================largest number in an array using reduce==============================================

const arrayNumbers = [3, 56, 23, 89, 12, 45];

const largestNumber = arrayNumbers.reduce((largest,current)=> largest>current? largest:current)

console.log(largestNumber)

//===============================================================generate a function to generate the  multiples of a number====================

function multipleGenerator(num , limit) {
    const multipleArray = [];
    for (i=num; i<=limit; i += num){
        multipleArray.push(i)
    }
    return multipleArray;
}
console.log(multipleGenerator(5,70));

//============================================================create a function that returns the sum of all arguments passed to it========================

function argSum() {
    let sum = 0;
    for (i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
};
console.log(argSum(1, 2, 3, 4, 5));

//===============================================================================================

function* printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      yield arr[i];  // Yield each element
    }
  }
  
  const fruits = ['apple', 'banana', 'orange'];
  const fruitGenerator = printArray(fruits);
//   console.log(fruitGenerator.next());   explicitly print the yeild 

//in while loop after initializing result with the first object (result)
  let result = fruitGenerator.next();
  while (!result.done) {
    console.log(result.value);  // Print the value
    result = fruitGenerator.next();  // Move to the next value
  }
  

  //==============================================================prime number============================
let arr = [33,4,5,3,9,7,2,3,5,1,2,0];

let out = arr.reduce((acc,curr,) => {
    if (curr>1){
        let flag = true;
        for(let i=2; i<= Math.sqrt(curr); i++){
            if(curr%i === 0){
                flag = false;
                break;
            }
        }
        if (flag){
            acc.add(curr);
        }
    }
    return acc
},new Set())  // as its object we use add
console.log(...out);

//========================filter unique prime=======================

let arr = [33,4,5,3,9,7,2,3,5,1,2,0];


let result = arr.filter((val) => {
    if(val<2) return false
    for(let i=2; i<=Math.sqrt(val); i++){
        if(val%i === 0){
            return false
        }
    }
    return true
})

let unique= [...new Set()]

console.log(result)

//===============================evenno printing in 1 sec delay=============================================
let i = 2
let timer = setInterval(()=> {
    if(i%2===0){
        console.log(i)
    }
    i++
    if(i>10){
        clearInterval(timer)
    }
},1000)

//=================

for(let i=1; i<=10; i++){
    setTimeout(() => {
        if(i%2 ===0){
         console.log(i)   
        }
    }, i*1000)
}

//===================

let i = 0

let f = setInterval(() => {
    console.log(i)
    i++
    setTimeout(() => {
        clearInterval(f)
    },2000)
},1000)