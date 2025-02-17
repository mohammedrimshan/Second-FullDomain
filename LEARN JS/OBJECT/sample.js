//=============================object destructuring=====================
//Object destructuring is a way to easily pull out specific values from an object and assign them to variables

const developer = {
    Name: "Aishu",
    Batch: "BCC-224",
};

const { Name, Batch } = developer;
// let NAme = developer.Name;
// let BAtch = developer.Batch;

// console.log (NAme);
// console.log (BAtch);

console.log(`Name: ${Name}`);
console.log(`Batch: ${Batch}`);

//========================nested destructuring===========================
//If an object has another object inside it, you can use destructuring to get values from both the outer and inner objects.

const brototype = {
    Batch1: "BCC-224",
    BCC_224: {
        studentName: "Aishu",
        rollNo: 34,
    }
};

const {Batch1, BCC_224 : {studentName,rollNo}} = brototype;
console.log("Student Name:" , studentName);
console.log(`Roll No: ${rollNo}`);
console.log(`Batch No: ${Batch1}`);

//========================nested destructuring===========================

const car12 = {
    brand: "Toyota",
    model: {
        carName: "Corolla",
        year: 2020
    }
};

const {brand, model:{carName,year}} = car12;

console.log(`Car Name: ${carName}`);
console.log(`Brand: ${brand}`);

//========================object define.property/define.properties===========================

const object1 = {};
const object2 = {};

Object.defineProperty(object1, "age", {value: 25});

Object.defineProperties(object2,{
    age: {value: 34},
    height: {value: 170},
    weight: {value: 56}
});

console.log(object1);
console.log(object2);

//========================Object.entries/ Object.formEntries===========================

const object3 = {
    cafe: "CAFE COFFEE DAY",
    place: "Kaloor"
};

const arrayEntries = Object.entries(object3);  //give array of keys and the values [["key1", "value1"],["key2" , "vslue2"]]
console.log("Array entries==Object.entries(objectname) :", arrayEntries);

const arrayLab =[
  ["Lobour 1","Sivan"],
  ["labour 2","Divakaran"]
];

const newObject = Object.fromEntries(arrayLab);
console.log("New object== Object.formEntries(objectname) :", newObject);

//========================Object.keys/ Object.values===========================


const keys = Object.keys(object3);   //give array of keys or properties
console.log("array of keys==Object.key(objectName) :", keys);

const values = Object.values(object3);   //give array of values
console.log("array of values==Object.values(objectName) :", values);


//==========================================================object creation methods=================================================================
//======================================================object literals=======================================================================

const car1 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start() {
      console.log('Car started');
    }
  };
  
  console.log(car.make); // "Toyota"
  car.start(); // "Car started"  

//======================================================factory functions=======================================================================

function createCar(make, model, year) {
    return {
      make,
      model,
      year,
      start() {
        console.log(`${make} ${model} started`);
      }
    };
  }
  
  const myCar1 = createCar('BMW', 'X5', 2021);
  console.log(myCar1.make); // "BMW"
  myCar1.start(); // "BMW X5 started"
  
//======================================================constructor functions=======================================================================

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
      console.log(`${this.make} ${this.model} started`);
    };
  }
  
  const myCar12 = new Car('Honda', 'Civic', 2021);
  console.log(myCar12.make); // "Honda"
  myCar12.start(); // "Honda Civic started"  

//======================================================class=======================================================================

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start() {
      console.log(`${this.make} ${this.model} started`);
    }
  }
  
  const myCar = new Car('Tesla', 'Model 3', 2022);
  console.log(myCar.make); // "Tesla"
  myCar.start(); // "Tesla Model 3 started"  

//======================================================object.create=======================================================================

const carPrototype = {
    start() {
      console.log(`${this.make} ${this.model} started`);
    }
  };
  
  const car = Object.create(carPrototype);
  car.make = 'Ford';
  car.model = 'Mustang';
  car.year = 2023;
  
  console.log(car.make); // "Ford"
  car.start(); // "Ford Mustang started"


  //==================================== object adding =========================================================
  

object1= { a: 1, b: 2, d: 3 };
object2 ={ b: 3, c: 4 };

const objectFinal = {...object1,...object2};

const objectNew = Object.assign ({}, {object1,object2});
console.log(objectNew); //{ object1: { a: 1, b: 2, d: 3 }, object2: { b: 3, c: 4 } }

delete object2.c; 
console.log(objectFinal);  //{ a: 1, b: 3, d: 3, c: 4 }
   
//================================================add values of the array===================================

arrayOne = [1,3,5,7,8];
arrayTwo = [4,6,8,8,9];


const totalSum = arrayOne.concat(arrayTwo).reduce((sum, current) => sum + current, 0);
// const totalSum = [...arrayOne, ...arrayTwo].reduce((sum, current) => sum + current, 0);

console.log(totalSum);  // Output: 61
