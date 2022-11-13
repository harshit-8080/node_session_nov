/**
    
    1.  We can use await outside async also in following case :-
            1.  Module pattern should be es6.
            2.  await should be at top level of module.
            3.  It should not inside any function or something.
            4.  It should be at TOP LEVEL OF MODULE.

 */


function fun(params) {

    return Promise.resolve("data returned from promise")
    // return new Promise((res,rej)=>{
    //     res("this is resolved value");
    // })

}

console.log("start");



const data = await fun();
console.log(data);



const url = Promise.resolve("www.drive.google.com/harshit71");
console.log(url);


url
.then((v)=>{
    console.log("this is url promise ", v);
})



const song = await Promise.resolve("excuses.mp3");
console.log(song);



console.log("end");