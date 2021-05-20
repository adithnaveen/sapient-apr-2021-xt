const fs = require("fs"); 

fs.unlink("./sample.txt", (err) => {
    if(err) {
        console.log("File deletion err", err);
    }else {
        console.log("File Deleted... ");
    }
})