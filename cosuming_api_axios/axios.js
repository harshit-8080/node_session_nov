// const axios = require("axios");
import axios from "axios";

// axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// .then((v)=>{
//     console.log(v.data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// we can use await on top level in es6 modules
const response = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");


console.log(response.data);