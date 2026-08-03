const express=require("express");

const app=express();


app.use(express.json());


const employeeRoutes =
require("./modules/employee/routes/employeeRoutes");


app.use(
"/api/employees",
employeeRoutes
);


module.exports=app;