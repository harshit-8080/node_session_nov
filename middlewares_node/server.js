const express = require("express");

const app = express();

function m1(req,res,next) {
    console.log("this is m1");
    next();
}

function m2(req,res,next) {
    console.log("this is m2");

    res.status(201).json({
        "result":"returning from second middleware"
    })
}

function m3(req,res,next) {
    console.log("this is m3");
    next();
}



app.get("/", m1,m2,m3,(req,res)=>{

    res.status(200).json({
        "data":"this is result"
    })
})


app.listen(4000, ()=>{
    console.log("server started at 4000");
})