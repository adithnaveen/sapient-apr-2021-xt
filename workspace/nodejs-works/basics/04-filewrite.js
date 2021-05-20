const fs = require("fs"); 

fs.writeFile("sample.txt", "This is sample data", (err)=> {
    if(err) {
        console.log("Error while writing ", err);
    }else {
        console.log("File Created... ");
    }
})