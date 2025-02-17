//===========================================factory fun =======================================================

function createName (name, age){
    return{
        name: name,
        age: age,
        greet(){
            document.write(`Hi Im  ${this.name} and my age is ${this.age}`);
        }
    }
}

const person1 = createName("aishu", 27)
person1.greet();

//===========================================factory fun =======================================================

function createEmployee (name,position){
    return {
        name: name,
        position: position,
        announcement(){
            console.log(`Hi.. ${this.name} is the best ${this.position} in this company`);
        }
    }
}

const employee1 =  createEmployee ("aishu", "developer");
employee1.announcement();


//===========================================constructor method=======================================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.area = width * height; // Calculate area during initialization
    }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50

//===========================

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = width * height; // Calculate area during initialization
}

const rectc = new Rectangle(5, 10);
console.log(rectc.area); // Output: 50
