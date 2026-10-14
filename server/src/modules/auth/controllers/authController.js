const User = require("../models/user");
const bcrypt = require("bcrypt");
const generateToken = require("../../../utils/generateToken");


const activateAccount = async(req,res)=>{

    try{

        const {token,password}=req.body;


        const user = await User.findOne({
            activationToken:token
        });


        if(!user){

            return res.status(400).json({
                message:"Invalid activation token"
            });

        }


        if(user.activationExpires < Date.now()){

            return res.status(400).json({
                message:"Activation token expired"
            });

        }



        const hashedPassword =
        await bcrypt.hash(password,10);



        user.password = hashedPassword;

        user.status="ACTIVE";

        user.isEmailVerified=true;

        user.activationToken=null;

        user.activationExpires=null;


        await user.save();



        res.status(200).json({

            message:
            "Account activated successfully"

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};


const login = async(req,res)=>{

    try{

        const {
            email,
            password
        } = req.body;



        const user = await User.findOne({
            email
        });



        if(!user){

            return res.status(404).json({
                message:"User not found"
            });

        }



        if(user.status !== "ACTIVE"){

            return res.status(401).json({
                message:"Account not activated"
            });

        }



        const isMatch =
        await bcrypt.compare(
            password,
            user.password
        );



        if(!isMatch){

            return res.status(401).json({
                message:"Invalid password"
            });

        }



        const token =
        generateToken(user);



        res.status(200).json({

            message:"Login successful",

            token,

            user:{
                id:user._id,
                role:user.role
            }

        });


    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


module.exports = {
    activateAccount,
    login,
};