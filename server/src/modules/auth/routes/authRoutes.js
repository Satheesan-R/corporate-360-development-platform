const express=require("express");

const router=express.Router();


const {
	activateAccount,
	login,
} = require("../controllers/authController");



router.post(
"/activate",
activateAccount
);

router.post(
"/login",
login
);



module.exports=router;