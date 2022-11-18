function printName(name) {
    
    console.log("this is your ", name);

}
function printAge(age) {
    
    console.log("this is your ", age);

}

// module.exports = printName;

module.exports = {
    printName,
    printAge
}