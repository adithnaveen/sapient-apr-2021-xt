document.getElementById("myBtn").addEventListener("click", fn1)

function fn1() {
    console.log("From fn1 ");
}

document.getElementById("myBtn1").addEventListener("click", (evt) => {
    console.log("this is " , evt.target.value);
    // console.log("Event is ",  event);
    console.log("You called BTN1");
})

document.getElementById("myform").addEventListener("submit", (evt) => {
    console.log(evt);
    evt.preventDefault();
}); 

