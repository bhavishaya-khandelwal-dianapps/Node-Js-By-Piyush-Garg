console.log("Hey there! I am JS");



//* Method 1 
// const math = require("./math.js");
// console.log(math.add(8, 9));
// console.log(math.sub(8, 9));




//* Method 2
const { add, sub } = require("./math.js");
console.log(add(8, 8));
console.log(sub(8, 8));