//* Architecture of Node JS :-


const fs = require("fs");

//* Sync......Blocking Request
// fs.writeFileSync("./test.txt", "Hello World");



//* Async.......Non-Blocking Request
// fs.writeFile("./test1.txt", "Hello Wordl", (err) => {
//     if(err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log("File Created Successfully");
//     }
// });



console.log("1");

//* Blocking 
// let res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);

//* Non-Blocking 
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if(err) {
        console.log("Error :", err);
    }
    else {
        console.log(data);
    }
});


console.log("2");



//* Default thread pool size = 4
const os = require("os");
console.log(os.cpus.length);