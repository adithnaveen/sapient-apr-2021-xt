window.onload = function() {
    document.querySelector("#btnGet").onclick = function(){
        let id = document.querySelector("#post-id").value

        if(!id) {return}

        let xhr = new XMLHttpRequest()
        let url = "https://jsonplaceholder.typicode.com/posts/"
        xhr.open("GET", url + id)


        // 0 - initiated
        // 1 - initiated, but request not sent 
        // 2 -  sent
        // 3 - in progress 
        // 4 - success 
        xhr.onreadystatechange = function() {
            if(xhr.readyState==4 && xhr.status ==200) {
                 let resp = JSON.parse(xhr.responseText); 
                 if(!resp || resp ==null) {
                     console.warn(resp);
                 }else {
                     putInId("userid", resp.userId)
                     putInId("id", resp.id)
                     putInId("title", resp.title)
                     putInId("body", resp.body)
                 }
            }else if(xhr.readyState ==4 && xhr.status==404) {
                alert("Sorry ID Searched is not Found")
                byId("post-id").value=""; 
                byId("post-id").focus()
            }
        }

        xhr.send();
    }
}

function byId(id) {
    return document.querySelector("#"+id)
}

function putInId(id, text) {
    byId(id).innerHTML = text; 
}

function getPostFromFetch() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(resp => resp.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

// still to complete 
function postToJson(value) {
    fetch("https://jsonplaceholder.typicode.com/posts/", 
    {
        method:"POST", 
        body :JSON.stringify(value), 
        headers : {
            "Content-Type" :"application/json"
        }
    }).then(resp => {
        resp.json();
    }).then(res => {

    })

}











