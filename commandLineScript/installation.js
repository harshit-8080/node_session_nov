#!/usr/bin/env node

console.log("1. Refresh Install");
console.log("2. Old Install");
console.log("3. Latest Install");


console.log("Please select type of instalation: ");



if(process.argv[2] == "1"){

    console.log("you selected Refresh Install");
}
else if(process.argv[2] == "2"){

    console.log("you selected Old Install");
}
else{

    console.log("you selected Latest Install");
}






/**
 
#!/usr/bin/env node ---> this is

Shebang or hashbang ( #! ) is the first line of the file which tells the OS which interpreter to use.

 */