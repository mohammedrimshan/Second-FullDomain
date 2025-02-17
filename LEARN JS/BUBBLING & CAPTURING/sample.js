
document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent clicked");
},false);  

//if true and clicked on grandparent div then Grandparent clicked , parent clicked, child clicked
// false then clicked on grandparent div then  child clicked , parent clicked , Grandparent clicked

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent clicked");
},false); //if true and clicked in parent div, then parent clicked, child clicked

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("child clicked");
},false);

//capturing has priority in case of mix of true and false....
//true will execute first

document.querySelector("#child")
.addEventListener('click', (e) => {
    console.log("child clicked");
    e.stopPropagation();  //afetr this execution then stops
},false);