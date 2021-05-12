(function(){
    let span1 = document.getElementById("span-1")
    let span2 = document.getElementById("span-2")

    if(navigator.onLine) {
        console.log("You are online");
        span1.innerHTML="<p> You were online when page was loaded"
        
    }else {
        console.log("You are offline");
        span1.innerHTML="<p>Sorry you are offline when page was loaded"
    }

    (function showContentPlusStyle() {
        span2.innerHTML = "I've got the message "
        span2.className=navigator.onLine? "online":"offline"
    })()

    // checking online or offline with event listener
    window.addEventListener("online", function () {
        console.log("you are online in event listener");
        showContentPlusStyle()
    })
    
    window.addEventListener("offline", function () {
        console.log("you are offline in event listener");
        showContentPlusStyle()
    })


})()