function printName(name) {

   console.log("Hello ", name);

}

function printAge(age) {

    console.log("Your age ", age);
 
 }

module.exports = {

    printName,
    printAge 

}

// Here in below, We can exports as a function as well.
// module.exports = printName;