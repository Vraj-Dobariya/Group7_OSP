const express = require("express");
const { registerUser } = require("../controller/registerUser");
const { authUser, authRole } = require("../controller/authUser");
const protect = require("../middleware/authMiddleware");
const { getUserProfile,updateUserProfile } = require("../controller/getUserProfile");
const { getListOfScholarships } = require("../controller/ApplicantController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/authRole").post(protect, authRole);

router.get("/getuserprofile", getUserProfile);
router.route('/updateuserprofile').post(updateUserProfile);

router.route("/getlistofscholarships").get(getListOfScholarships);
module.exports = router;
