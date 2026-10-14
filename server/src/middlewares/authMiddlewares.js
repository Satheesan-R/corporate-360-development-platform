const jwt = require("jsonwebtoken");
const User = require("../modules/auth/models/user");


const protect = async(req,res,next)=>{


    try{


        let token;


        // Check Authorization Header

        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){

            token =
            req.headers.authorization.split(" ")[1];

        }



        if(!token){

            return res.status(401).json({

                message:"No token provided"

            });

        }



        // Verify Token

        const decoded =
        jwt.verify(
            token,
            process.env.JWT_SECRET
        );



        // Find User

        const user =
        await User.findById(decoded.id);



        if(!user){

            return res.status(404).json({

                message:"User not found"

            });

        }



        // Attach User Information

        req.user=user;



        next();



    }
    catch(error){


        return res.status(401).json({

            message:"Invalid token"

        });


    }

};


module.exports={
    protect
};