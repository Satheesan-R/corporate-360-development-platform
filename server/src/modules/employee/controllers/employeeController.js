const User = require("../../auth/models/User");
const Employee = require("../models/Employee");
const crypto = require("crypto");


const createEmployee = async(req,res)=>{

    try{

        const {
            firstName,
            lastName,
            email,
            department,
            designation
        } = req.body;


        // Check user already exists

        const existingUser = await User.findOne({
            email
        });


        if(existingUser){

            return res.status(400).json({
                message:"User already exists"
            });

        }


        // Generate activation token

        const token = crypto
        .randomBytes(32)
        .toString("hex");


        // Create User Account

        const user = await User.create({

            email,

            role:"EMPLOYEE",

            status:"INVITED",

            activationToken:token,

            activationExpires:
            Date.now() + 24*60*60*1000

        });



        // Create Employee Profile

        const employee = await Employee.create({

            userId:user._id,
            employeeId:`EMP-${Date.now()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`,

            firstName,

            lastName,

            department,

            designation

        });



        res.status(201).json({

            message:
            "Employee created successfully",

            employee

        });


    }
    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};


module.exports={
    createEmployee
};