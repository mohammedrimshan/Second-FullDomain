//========================================all===============================================
const P1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P1 success"), 3000);
});

const P2 = new Promise((resolve,reject) => {
    setTimeout (() => resolve ("P2 success"), 1000);  
    // setTimeout (() => reject ("p2 fail"), 1000);  
});

const P3 = new Promise((resolve,reject) => {
    // setTimeout (() => resolve ("p3 success"), 2000);
    setTimeout (() => reject ("P3 fail"), 2000); 
});


Promise.all ([P1,P2,P3])    //sample.js:22  P3 fail
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error)
});

//if any of the promises is rejected then - dont wait for other promises to settle or reject
//promise.all -----['p1 success', 'p2 success', 'p3 success'] after 3 sec


//==================================================allsettled ============================================================================================


Promise.allSettled ([P1,P2,P3])   //wait for all promises to settle 
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error)
}); 

//{status: 'fulfilled', value: 'P1 success'}
//{status: 'fulfilled', value: 'P2 success'}
// {status: 'rejected', reason: 'P3 fail'}

// //==================================================allsettled ============================================================================================


Promise.race ([P1,P2,P3])  //P2 success    ///first settled value rejected or resolved
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error)
});

// //==================================================any ============================================================================================


Promise.any ([P1,P2,P3])   //P2 success  any fullfilled promise   , if all failure teh give array of aggregated error of 3 
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error.errors)  //for getting the aggregated errors array
});
