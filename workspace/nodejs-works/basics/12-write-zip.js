const fs = require("fs")
const zlib = require("zlib")

const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();


const readStream = fs.createReadStream("./sample.txt", "UTF-8");
const writeStream = fs.createWriteStream("./sample.txt.gz", "UTF-8");

// readStream.pipe(writeStream)
// readStream.pipe(gzip).pipe(writeStream);

