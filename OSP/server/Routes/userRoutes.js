const express= require("express");
const { registerUser } = require("../controller/registerUser");
const {authUser ,authRole} = require("../controller/authUser");
const protect = require('../middleware/authMiddleware');
const router = express.Router();


router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/authRole').post(protect,authRole);


 
module.exports=router;  