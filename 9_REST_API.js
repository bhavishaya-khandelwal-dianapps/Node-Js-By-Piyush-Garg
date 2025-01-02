//* REST API ->
//? 1. It works on SERVER-CLIENT ARCHITECTURE (it means server is a different entity and client is a different entity and it's good if they both are independent of each other)

//? 2. Always respect all HTTP Methods  

//! We are designing REST API  
//* TASKS -> 
//? GET  /users - List all users 
//? GET /users/1 - Get the user with id 1 
//? GET /users/2 - Get the user with id 2
//? POST /users - Create new user 
//? PATCH /user/id - Edit the user with ID 1 
//? DELETE /users/1 - Delete the user with ID 1



const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;


//* Middleware - Plugin
app.use(express.urlencoded({ extended : false }));
// In simple terms, the line app.use(express.urlencoded({ extended: false })) is telling your Express application how to handle incoming data from forms (such as when a user submits a form on a webpage).

// Here’s a breakdown:

// app.use(): This is a method in Express that adds middleware. Middleware is like a helper function that runs before your request reaches the actual route handler (the part that processes the request and sends a response).

// express.urlencoded(): This is middleware provided by Express to handle URL-encoded data. When someone submits a form with method POST, the browser sends the form data in a format called application/x-www-form-urlencoded. This middleware helps to parse that data so that you can access it easily in your route.

// { extended: false }: This option determines how the URL-encoded data will be parsed.

// When extended: false, the data will be parsed using the querystring library, which can only handle simple key-value pairs.
// When extended: true, it uses the qs library, which allows more complex objects, like nested data.
// So, the code is setting up your app to handle form data and make it easy to access (like req.body) when users submit forms. By setting extended: false, it’s saying that the form data will be simple (not nested or complex).


//* To list all the users
app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => {
                return (`<li> ${user.first_name} </li>`);
            })}
        </ul>
    `;
    res.send(html);
});


//* To list the data in json format
app.get("/api/users", (req, res) => {
    return res.json(users);
});


app.post("/api/users", (req, res) => {
    //? Create a new user 

    const body = req.body;  //* Whatever data we get from frontend, we see that data in this body. 
    console.log("Body =", body);

    //* Pushing the data in our JSON data(MOCK_DATA.json)
    users.push({...body, id : users.length + 1});
    let filePath = path.join(__dirname, "MOCK_DATA.json");
    fs.writeFile(filePath, JSON.stringify(users), (err, data) => {
        return res.json({ status : "success", id : users.length });
    });
    return res.json({ status : "pending" });
});


//* Dynamic Path Parameters 
//? /api/users/:id
app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.filter((u) => {
        return u.id == id;
    });
    return res.send(user);
})
.patch((req, res) => {
    //! Edit user with id 

    //todo Step 1 Get the updated data of the user from POSTMAN
    let userData = req.body;
    console.log(userData); 

    //todo Step 2 Find that user whose info. we need to update 
    let userToChange = users.find((currUser) => {
        if(currUser.id == userData.id) {
            return currUser;
        }
    })

    //todo Step 3 Here we are updating the details of that user 
    userToChange = userData;

    let updatedUsers = users.map((currUser) => {
        if(Number(currUser.id) == Number(userToChange.id)) {
            currUser.id = userToChange.id;
            currUser.first_name = userToChange.first_name;
            currUser.last_name = userToChange.last_name;
            currUser.email = userToChange.email;
            currUser.gender = userToChange.gender;
            currUser.job_title = userToChange.job_title;
        }
    });
    console.log(updatedUsers);

    //todo Step 3 Update the changes in our JSON FILE (MOCK_DATA.json) 
    // let filePath = path.join(__dirname, "MOCK_DATA.json");
    // fs.writeFile(filePath, JSON.stringify(u), (err) => {
    //     return res.json({ status : "success" });
    // });

    return res.json({ status : "pending" });
})
.delete((req, res) => {
    //? Delete the user with id 
    return res.json({ status : "pending" });
})



app.listen(PORT, () => {
    console.log(`Server is starting on PORT number ${PORT}`);
});