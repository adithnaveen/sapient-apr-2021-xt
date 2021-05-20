const fs = require("fs"); 


fs.readFile("./sample.txt",'UTF-8', (err, data) => {
    if(err) {
        console.log("error reading file " , err);
    }else {
        console.log(data);
    }
})