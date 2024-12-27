const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
    const log = `${Date.now()} : ${req.url} New Req Received\n`;
    fs.appendFile("./log.txt", log, (err, data) => {
        switch(req.url) {
            case "/": 
                res.end("Home Page");
                break;
            
            case "/about": 
                res.end("About Page");
                break;
            
            case "/contact":
                res.end("Contact Page");
                break;
        }
    });
});


server.listen(8000, () => {
    console.log("Server started");
});