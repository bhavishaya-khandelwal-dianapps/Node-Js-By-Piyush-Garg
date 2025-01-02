const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 7000;


//* Middleware - Plugin
app.use(express.urlencoded({ extended : false }));


app.use((req, res, next) => {
    let filePath = path.join(__dirname, "log.txt");
    console.log(filePath);
    fs.appendFile(filePath, `\n${Date.now()} : ${req.method} : ${req.path}`);
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    req.myUserName = "bhavishaya.dev";
    next();
});

app.use((req, res, next) => {
    console.log("Hello from middleware 2", req.myUserName);
    next();
});


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
    return res.json({ status : "pending" });
})
.delete((req, res) => {
    //? Delete the user with id 
    return res.json({ status : "pending" });
})



app.listen(PORT, () => {
    console.log(`Server is starting on PORT number ${PORT}`);
});