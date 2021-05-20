const fs = require("fs")

const readStream = fs.createReadStream("./sample.txt", "UTF-8");
const writeStream = fs.createWriteStream("./sample2.txt", "UTF-8");

readStream.pipe(writeStream)