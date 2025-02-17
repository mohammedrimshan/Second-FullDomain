document.querySelector("#category").addEventListener('click', () =>{
    console.log("Category parent clicked"); //Category parent clicked
});

document.querySelector("#category").addEventListener('click', (e) =>{
    console.log(e.target);  //<li id="laptops">laptops</li>
});

document.querySelector("#category").addEventListener('click', (e) =>{
    console.log(e.target.id);   //laptops, cameras, shoes
    if (e.target.tagName == "LI") {   //only li elements will work acc. others will not execute
    //can remove the below and check
    window.location.href = "/" + e.target.id;  //error as the laptops, cameras pages are not created yet.
    };
});

document.querySelector("#form").addEventListener('keyup', (e) => {
    console.log(e);
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    };
});