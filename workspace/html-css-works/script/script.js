function fnVote() {
    var age = parseInt(prompt("Enter Your Age"))

    if(age > 18){
        alert("You Can Vote")
    }else {
        alert("Sorry Wait for " + (18-age) +" years")
    }
}