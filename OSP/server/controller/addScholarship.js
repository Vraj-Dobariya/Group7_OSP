const pool = require("../config/db");


const addScholarship = async (req, res) => {
  console.log("Reached addScholarship");

  // Destructuring the request body
  const {
    scholarshipName,
    amount,
    duration,
    endDate,
    description,
    educationLevel,
    eligibleCourses,
    minPercentage,
    annualFamilyIncome,
    applicationSteps,
    applicationDeadline,
    documentsRequired,
    benefits,
  } = req.body;

  // Input validation
  if (
    !scholarshipName ||
    !amount ||
    !duration ||
    !endDate ||
    !description ||
    !educationLevel ||
    !eligibleCourses ||
    !minPercentage ||
    !annualFamilyIncome ||
    !applicationSteps ||
    !applicationDeadline ||
    !documentsRequired ||
    !benefits
  ) {
    console.error("Please Input all the Fields");
    return res.status(400).json("Please Input all the Fields");
  }

  try {
    // Generate a random scholarship ID (e.g., 'SCH12345')
    const scholarshipId = `SCH${Math.floor(10000 + Math.random() * 90000)}`;

    // Insert query for Scholarships table
    const insertQuery = `
      INSERT INTO osp.Scholarships (
        scholarship_id,
        scholarship_name,
        amount,
        duration,
        end_date,
        description,
        education_level,
        eligible_courses,
        min_percentage,
        annual_family_income,
        application_steps,
        application_deadline,
        documents_required,
        benefits
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14
      )
    `;

    // Array of values for parameterized query
    const values = [
      scholarshipId,
      scholarshipName,
      amount,
      duration,
      endDate,
      description,
      educationLevel,
      eligibleCourses,
      minPercentage,
      annualFamilyIncome,
      applicationSteps,
      applicationDeadline,
      documentsRequired,
      benefits,
    ];

    // Execute the insert query
    await pool.query(insertQuery, values);

    console.log(`Inserted scholarship: ${scholarshipName}`);
    res.status(201).json({
      message: "Scholarship added successfully",
      scholarshipId,
    });
  } catch (error) {
    console.error("Error inserting scholarship:", error.message);
    res.status(500).json({
      errMsg: "Internal Server Error",
    });
  }
};

module.exports = { addScholarship };
