const http = require("http");

let port = 3000; 
const server = http.createServer((req, res) => {
    /* res.write("Hello World... ")
    res.end();
    */ 

    if(req.url === '/') {
        res.write("You invoked root page...")
    }else {
        res.write("This is not root page... ")
    }
    res.end();
})

server.listen(port ,() => console.log(`server hosted on ${port}`))