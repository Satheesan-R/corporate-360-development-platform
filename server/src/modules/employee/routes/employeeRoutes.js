const express = require("express");

const router = express.Router();


const {
createEmployee
}=require("../controllers/employeeController");



router.post(
"/create",
createEmployee
);



module.exports = router;