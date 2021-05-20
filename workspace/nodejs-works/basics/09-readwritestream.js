const fs = require("fs");

const readStream = fs.createReadStream("./sample.txt", "UTF-8");
const writeStream = fs.createWriteStream("./sample1.txt", "UTF-8");


readStream.on("data", (chunk) => {
    // console.log("------"+chunk);
    writeStream.write(chunk); 
    
})