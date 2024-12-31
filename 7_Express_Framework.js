import express from "express";
import http from "http";


const app = express();


//* app.METHOD(PATH, HANDLER);
app.get("/", (req, res) => {
    return res.send("<h2>Hello from Home Page</h2>");
});

app.get("/about", (req, res) => {
    return res.send(`<h2>Hello from About Page, Hey ${req.query.myName}, You are ${req.query.age}</h2>`);
});

const myServer = http.createServer(app);

myServer.listen(4000, () => {
    console.log("Server is listening on 4000");
});