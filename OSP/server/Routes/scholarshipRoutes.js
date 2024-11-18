const express = require("express");
const { addScholarship } = require("../controller/addScholarship");
const { getScholarships } = require("../controller/getScholarships");
const { deleteScholarship } = require("../controller/deleteScholarship");
const { editScholarship } = require("../controller/editScholarship");
const { getScholarship } = require("../controller/getScholarship");
const { getApplicantsByScholarshipId } = require("../controller/ApplicantController");
const router = express.Router();

router.route("/addScholarship").post(addScholarship);
router.route("/getScholarships").get(getScholarships);
router.route("/:scholarship_id").get(getScholarship);
router.route("/editScholarship/:scholarship_id").put(editScholarship);
router.route("/deleteScholarship/:scholarship_id").delete(deleteScholarship);

router.route("/:id/applicants").get(getApplicantsByScholarshipId);

module.exports = router;
