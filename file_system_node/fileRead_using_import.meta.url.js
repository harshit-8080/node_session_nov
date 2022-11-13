import fs from "fs/promises";

// console.log(__dirname);    "can't use __dirname in es modules"

// similar thing in es module for __dirname is import.meta.url

console.log(import.meta.url);
const filePath = new URL("student_info.txt",import.meta.url);


// We can read file using promises.

// fs.readFile(filePath,{encoding:"utf8"})
// .then((data=>{
//     console.log(data);
// }))
// .catch((error)=>{
//     console.log("this is error");
// })


// We can read file using await as well.

// const data = await fs.readFile( filePath, {encoding: 'utf8'} );
// console.log(data);




console.log("start");

async function f1() {

    const data = await fs.readFile( filePath, {encoding: 'utf8'} );
    console.log(data);
    return "reading is done";
}

f1().then((value)=>{

    console.log("this is returned form async function f1 ", value);

})

console.log("end");


