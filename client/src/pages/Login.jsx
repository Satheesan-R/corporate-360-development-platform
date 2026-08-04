import {useState} from "react";
import {loginUser} from "../api/authApi";
import {saveToken} from "../utils/token";


function Login(){


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const handleLogin=async()=>{


try{


const data =
await loginUser({

email,

password

});


console.log(data);



}
catch(error){

console.log(error);

}


};



return(

<div>

<h2>
Login
</h2>


<input

placeholder="Email"

onChange={
(e)=>setEmail(e.target.value)
}

/>


<input

placeholder="Password"

type="password"

onChange={
(e)=>setPassword(e.target.value)
}

/>


<button onClick={handleLogin}>

Login

</button>


</div>

)


}


export default Login;