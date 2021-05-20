const http = require("http");
const fs = require("fs");


const port = 3000; 
let server = http.createServer((req, res) => {

    if(req.url === '/') {
        const readStream = fs.createReadStream("./static/index.html");
        res.writeHead(200, {'Content-Type': 'text/html'});
        readStream.pipe(res);
    }else if(req.url === '/data/emp') {
        const readStream = fs.createReadStream("./data/employee.json");
        res.writeHead(200, {'Content-Type': 'application/json'});
        readStream.pipe(res)
    }else {
        res.write("***** Invalid URL ***** ")
        res.end();
    }
})
server.listen(port, () => console.log("server started... "));
