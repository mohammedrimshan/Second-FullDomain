  //================================================shallow copy======================================================

// Original object containing a nested array
const original = {
    name: "Alice",
    numbers: [1, 2, 3]
  };
  
  // Create a shallow copy using spread syntax
  const shallowCopy = { ...original };
  
  // Modify the nested array in the shallow copy
  shallowCopy.numbers[0] = 100;
  
  // Display both the original and the shallow copy
  console.log("Original Object:", original);
  console.log("Shallow Copy:", shallowCopy);
  

  //================================================deep copy======================================================
  
  
// Original object with a nested array
const original = {
    name: "Alice",
    numbers: [1, 2, 3],
    details: { age: 30, city: "New York" }
  };
  
  // Create a deep copy using JSON methods
  const deepCopy = JSON.parse(JSON.stringify(original));
  
  // Modify the deep copy
  deepCopy.numbers[0] = 100;
  deepCopy.details.city = "Los Angeles";
  
  // Display both objects
  console.log("Original Object:", original);
  console.log("Deep Copy:", deepCopy);
  