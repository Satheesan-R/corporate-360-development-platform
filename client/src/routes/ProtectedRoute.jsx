import {Navigate}
from "react-router-dom";


import {getToken}
from "../utils/token";


function ProtectedRoute({children,roles}){


const token=getToken();


const user =
JSON.parse(
localStorage.getItem("user")
);



if(!token){

return <Navigate to="/login"/>

}



if(
roles &&
!roles.includes(user.role)
){

return <Navigate to="/unauthorized"/>

}



return children;


}


export default ProtectedRoute;