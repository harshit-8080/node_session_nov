const printDetails = require("./printDetails.js");
const laptop = require("./laptopConfig.js");

printDetails.printName("harshit raj");
printDetails.printAge(25);

laptop.ram("16 gb");
laptop.core("quad core")

console.log(__dirname + "/main.js");