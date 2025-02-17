const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = false; // Simulate success or failure or can be true 
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Failed to fetch data.");
        }
    }, 2000); // Simulate a 2-second delay
});

fetchData
    .then((message) => {
        console.log(message); // Output if resolved: "Data fetched successfully!"
    })
    .catch((error) => {
        console.log(error); // Output if rejected: "Failed to fetch data."
    });
//////////////////////////////////////////////////////////////////


// Example: Fetching data from an API
fetch('https://api.example.com/data') // URL to fetch from
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON from the response
  })
  .then(data => {
    console.log(data); // Handle the parsed data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error); // Handle errors
  });

//=====================

// Example: Fetching data with async/await
async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data'); // Await the fetch request
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Await the response to JSON
      console.log(data); // Handle the parsed data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error); // Handle errors
    }
  }
  
  fetchData(); // Call the async function
  

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let pizzaOrder = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let pizzaReady = true; // Pizza is ready!
        if (pizzaReady) {
            resolve("Your pizza is here!"); // Success
        } else {
            reject("Sorry, we're out of pizza."); // Failure
        }
    }, 4000)
});
pizzaOrder
    .then(function (message) {
        return console.log(message); // "Your pizza is here!"
    })
    .catch( (error) => {
         console.log(error); // If something went wrong
    });


//==================bind================================
    const person = {
        name: 'Alice',
    };
    
    function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
    }
    
    // Use `bind` to create a new function with `this` set to `person`
    const greetAlice = greet.bind(person, 'Hey', '!');
    greetAlice(); // Output: Hey, Alice!
    
    //=============================== call===========================
    
    const person2 = {
        name: 'Alice',
    };
    
    function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
    }
    
    // Use `call` to make `this` refer to the `person` object
    greet.call(person2, 'Hello', '!'); // Output: Hello, Alice!
    

    //================================apply=============================
    const person1 = {
        name: 'Alice',
    };
    
    function greet(greeting, punctuation) {
        console.log(`${greeting}, ${this.name}${punctuation}`);
    }
    
    // Use `apply` to make `this` refer to the `person` object
    greet.apply(person1, ['Hi', '.']); // Output: Hi, Alice.
    