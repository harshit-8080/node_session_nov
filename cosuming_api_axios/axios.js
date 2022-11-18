// const axios = require("axios");
import axios from "axios";

axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
.then((v)=>{

   console.log("response has been recorded");
})
.catch((err)=>{

    console.log(err);
})


// we can use await on top level in es6 modules
const response = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");


const teams = await axios.get("http://localhost:3000/team/teams");

console.log(JSON.stringify(teams.data,null,3));