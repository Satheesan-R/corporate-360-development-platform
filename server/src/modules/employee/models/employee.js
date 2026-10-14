const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({

   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   },


   employeeId: {
      type: String,
      required: true,
      unique: true
   },


   firstName: {
      type: String,
      required: true
   },


   lastName: {
      type: String
   },

   phone: {
      type: String,
      trim: true
   },

   address: {
      type: String,
      trim: true
   },

   profileImage: {
      type: String,
      default: ""
   },


   department: {
      type: String
   },


   designation: {
      type: String
   },


   manager: {
      type: String
   },


   joiningDate: {
      type: Date
   },


   employmentType: {
      type: String
   }


},
   {
      timestamps: true
   });


module.exports = mongoose.model(
   "Employee",
   employeeSchema
);