const express = require("express");
const { addScholarship } = require("../controller/addScholarship");
const { getScholarships } = require("../controller/getScholarships");

const router = express.Router();

router.route("/addScholarship").post(addScholarship);
router.route("/getScholarships").get(getScholarships);

module.exports = router;
