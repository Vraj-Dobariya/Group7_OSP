const pool = require("../config/db");

const applyForScholarship = async (req, res) => {
  console.log("Reached applyForScholarship");

  // Destructuring the request body
  const { scholarship_id, applicant_id, applied_date, status } = req.body;
  console.log("Okay ", scholarship_id, applicant_id, applied_date,status);
  // Input validation
  if (!scholarship_id || !applicant_id || !applied_date || !status) {
    console.error("Please Input all the Fields");
    return res.status(400).json("Please Input all the Fields");
  }

  try {
    // Generate a random scholarship ID (e.g., 'SCH12345')

    // Insert query for Scholarships table
    const insertQuery = `
  INSERT INTO osp.applied_in (
    scholarship_id,applicant_id,applied_date,status
  ) VALUES (
    $1, $2, $3, $4
  ) `;

    // // converting to array in postgre format
    // const eligibleCoursesArray = `{${eligibleCourses.join(",")}}`;
    // const documentsRequiredArray = `{${documentsRequired.join(",")}}`;
    // Array of values for parameterized query
    const values = [scholarship_id, applicant_id, applied_date, status];

    // Execute the insert query
    const result = await pool.query(insertQuery, values);
    console.log(`Inserted Application into Scholarship: ${scholarship_id}`);
    res.status(200).json({
      message: "Application added successfully",
      scholarship_id,
    });
  } catch (error) {
    console.error("Error inserting Application:", error.message);
    res.status(500).json({
      errMsg: "Internal Server Error",
      errCode: 23505,
    });
  }
};

module.exports = { applyForScholarship };
