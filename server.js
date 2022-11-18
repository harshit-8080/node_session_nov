const axios = require("axios");

async function f1(){
    
    const teams = await axios.get("http://localhost:3000/team/teams");
    return teams.data;

}

f1()
.then((v)=>{
    console.log(JSON.stringify(v,null,3));
})

