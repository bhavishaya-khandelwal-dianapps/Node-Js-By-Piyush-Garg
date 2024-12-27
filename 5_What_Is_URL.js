//* URL :- Uniform Resource Locator


const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    let date = new Date();
    let myUrl = url.parse(req.url);
    let log = `${date.toLocaleTimeString()} - ${req.url} - ${myUrl.path}\n`;
    console.log(myUrl);
    fs.appendFile("./log.txt", log, "utf-8", (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Data appended successfully");
        }
    });
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
        
        default:
            res.end("404 Error");
    }
});

server.listen(3000, () => {
    console.log("Server is starting");
})