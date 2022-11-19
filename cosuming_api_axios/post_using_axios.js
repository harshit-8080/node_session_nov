import FormData from 'form-data';
import axios from 'axios';
import require from 'dotenv'
require.config();


/*

    playerID:req.body.playerID,
    player_name:req.body.player_name,
    teamID:req.body.teamID,

 */

const response = await axios.get('http://localhost:3000/team/teams');
console.log(JSON.stringify(response.data,null, 3));


let data = {

    playerID:27,
    player_name:"zaher khan",
    teamID:101
}

axios({

    method:"POST",
    url:process.env.registerPlayer,
    data,
    headers: {
        'Content-Type': 'application/json'
    },
})
.then((v)=>{

    console.log("response is below ");
    console.log(v.data);

}).catch((err)=>{

    console.log("error is below ");
    console.log(err);

})


