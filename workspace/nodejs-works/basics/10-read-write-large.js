const fs = require('fs')

fs.readFile("./v1.mp4", (err, data) => {
    if(err) {
        console.log(err);
    }else {
        console.log("Data read... ");
    }

})