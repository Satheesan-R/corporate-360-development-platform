const express=require("express");

const router=express.Router();


const {
activateAccount
}=require("../controllers/authController");



router.post(
"/activate",
activateAccount
);



module.exports=router;