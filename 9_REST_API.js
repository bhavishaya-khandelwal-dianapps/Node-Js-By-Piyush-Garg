//* REST API ->
//? It works on SERVER-CLIENT ARCHITECTURE (it means server is a different entity and client is a different entity and it's good if they both are independent of each other)

//! We are designing REST API  
//* TASKS -> 
//? GET  /users - List all users 
//? GET /users/1 - Get the user with id 1 
//? GET /users/2 - Get the user with id 2
//? POST /users - Create new user 
//? PATCH /user/id - Edit the user with ID 1 
//? DELETE /users/1 - Delete the user with ID 1


import http from "http";
import express from "express";

const app = express();
const PORT = 8000;


app.get("/", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});