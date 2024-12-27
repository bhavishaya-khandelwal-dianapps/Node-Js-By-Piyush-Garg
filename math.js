function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return (a - b);
}




//* Method 1 
// module.exports.add = add;
// module.exports.sub = sub;




//* Method 2
module.exports = { add, sub };



//* Method 3
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;