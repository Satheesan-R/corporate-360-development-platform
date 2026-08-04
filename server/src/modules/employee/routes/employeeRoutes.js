const express = require("express");

const router = express.Router();


const {
createEmployee,getProfile
}=require("../controllers/employeeController");

const {
protect
}
=
require("../../../middlewares/authMiddlewares");


router.post(
"/create",
createEmployee
);

router.get(
"/profile",
protect,
getProfile
);


module.exports = router;