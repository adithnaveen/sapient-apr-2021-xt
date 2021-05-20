const fs = require("fs")
const zlib = require("zlib")

 
const gunzip = zlib.createGunzip();


const readStream = fs.createReadStream("./sample.txt.gz");
const writeStream = fs.createWriteStream("./uncompress.txt");

// readStream.pipe(writeStream)
// readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);
