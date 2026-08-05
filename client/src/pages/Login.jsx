import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../api/authApi";
import {saveToken} from "../utils/token";
import {saveUser}  from "../utils/user";


function Login(){


const navigate=useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");



const handleLogin=async()=>{


try{


const data =
await loginUser({

email,

password

});


saveToken(data.token);

saveUser(data.user);

if(data.user.role==="EMPLOYEE"){

navigate("/employee/dashboard");

}

else if(
data.user.role==="HR_MANAGER"
){

navigate("/hr/dashboard");

}

else if(
data.user.role==="SYSTEM_ADMIN"
){

navigate("/admin/dashboard");

}

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