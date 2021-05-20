const fs = require("fs"); 

let data ="new data to store in file... "
fs.appendFile("./sample.txt", data, (err) => {
    if(err) {
        console.log(err);
    }else {
        console.log(`Content written is  ${data}`);
    }
})