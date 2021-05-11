// import jQuery from 'jquery'

var $ ; 
$ = require("jquery")


 exports.getData = () =>  {
    // jQuery.ajax(URL, {method:"GET", dataType: "json", success : () => {
    //     return data; 
    // } })

    $.ajax({
        method:"GET", 
        url:"https://jsonplaceholder.typicode.com/posts/1", 
        success: function(data) {
            console.log(data);
        }
    }) 
  
    return "Hello"
}