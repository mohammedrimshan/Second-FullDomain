const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise p1 resolved after 2 seconds!");
    }, 2000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise p2 rejected after 3 seconds!");
    }, 3000);
});

async function handlePromises() {
    try {
        console.log("Hello");
        
        const result1 = await p1; // Waits for p1 to resolve
        console.log("Result from p1:", result1);
        
        const result2 = await p2; // Waits for p2 to resolve (will throw error)
        console.log("Result from p2:", result2);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

handlePromises();
