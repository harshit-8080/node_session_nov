const printDetail = require("./printDetail.js");
const cal = require("./module.exports_type2.js");



// console.log(process);
let sum = Number(process.argv[2]) + Number(process.argv[3]);
// console.log(sum);




// console.log(__dirname);




// console.log(module);
printDetail.printName("Harshit Raj")
printDetail.printAge(25);


cal.add(10,20);
cal.mul(10,20);