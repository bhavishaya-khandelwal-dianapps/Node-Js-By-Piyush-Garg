const fs = require("fs");


//* Synchronously Write
// fs.writeFileSync("./readme.md", "Hey There");

//* Asynchronously Write
// fs.writeFile("./contacts.txt", "Bhavishaya Khandelwal - 7627048054", "utf-8", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("File Created Successfully");
//     }
// })




//* Synchronously Read 
const read = fs.readFileSync("./readme.md", "utf-8");
// console.log(read);

//* Asynchronously Read 
// fs.readFile("./contacts.txt", "utf-8", (err, data) => {
//     if(err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log(data);
//     }
// })






//* Synchronously Append 
// fs.appendFileSync("./readme.md", "\nMy name is Bhavishaya Khandelwal");


//* Asynchronously Append
// fs.appendFile("./contacts.txt", "\nPiyush Garg - 2341235874", (err) => {
//     if(err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log("FIle Appended Successfully");
//     }
// });






//* Synchronously Copy 
// fs.copyFileSync("./readme.md", "./copySync.md");



//* Synchronously Delete the File 
// fs.unlinkSync("./copySync.md");




//* Synchronously see the stats of the file 
const res = fs.statSync("./readme.md");
// console.log(res);





//* Synchronously make directory 
// fs.mkdirSync("newDir");


//* Synchronously remove directory 
// fs.rmdirSync("newDir");