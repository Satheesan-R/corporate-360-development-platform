const express=require("express");

const app=express();


app.use(express.json());


const employeeRoutes =
require("./modules/employee/routes/employeeRoutes");

const authRoutes =
require("./modules/auth/routes/authRoutes");


app.use(
"/api/employees",
employeeRoutes
);

app.use(
"/api/auth",
authRoutes
);


module.exports=app;