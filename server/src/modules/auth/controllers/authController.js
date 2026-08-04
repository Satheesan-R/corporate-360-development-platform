const User = require("../models/User");
const bcrypt = require("bcrypt");


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


module.exports={
    activateAccount
};