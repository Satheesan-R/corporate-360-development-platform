const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

   email: {
      type: String,
      required: true,
      unique: true
   },

   password: {
      type: String,
      required: false
   },

   role: {
      type: String,
      required: null
   },

   status: {
      type: String,
      default: "INVITED"
   },

   activationToken: {
      type: String
   },

   activationExpires: {
      type: Date
   },

   isEmailVerified: {
      type: Boolean,
      default: false
   }

},
   {
      timestamps: true
   });


module.exports = mongoose.model("User", userSchema);