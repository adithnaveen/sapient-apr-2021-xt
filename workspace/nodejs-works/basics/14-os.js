console.log("this is new line for jenkins");
const os = require("os"); 
const path = require("path");


console.log(os.tmpdir());
console.log(os.type());
console.log(os.homedir());
console.log(os.arch());
console.log(os.cpus());

console.log(path.delimiter);

console.log(__dirname); 
console.log(__filename);

console.log(path.join(__dirname, 'public')); 
