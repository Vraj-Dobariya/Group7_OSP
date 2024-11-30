const pool = require("../config/db");

const getApplicantData = async (req, res) => {
  console.log("Reached getApplicantData");

  const student_id = req.query.id;
  const scholarship_id = req.query.scholarship_id;

  // console.log(req.query);

  try {
    let getQuery = `
    SELECT 
      a.applicant_id,
      a.first_name,
      a.middle_name,
      a.last_name,
      a.dob,
      a.gender,
      a.category,
      a.email,
      a.mobile_number,
      a.parent_name,
      a.occupation,
      a.income,
      a.parent_mobile,
      a.current_semester,
      a.year_of_admission,
      a.address_id,
      a.bank_account_no,
      a.college_id,
      ad.street_address,
      ad.pin_code,
      d.district_name,
      e.college_id,
      e.department_name,
      e.tuition_fees,
      e.non_tuition_fees,
      ai.status  -- Added status column from applied_in table
    FROM 
      osp.applicants a
    LEFT JOIN 
      osp.addresses ad ON a.address_id = ad.address_id
    LEFT JOIN 
      osp.districts d ON ad.district_id = d.district_id
    LEFT JOIN 
      osp.education_details e ON a.college_id = e.college_id
    LEFT JOIN 
      osp.applied_in ai ON a.applicant_id = ai.applicant_id  -- Join with applied_in to get status
    WHERE 
      a.applicant_id = '${student_id}'
      AND ai.scholarship_id = '${scholarship_id}';  -- Added condition for scholarship_id
    `;

    const response = await pool.query(getQuery);
    return res.status(200).json({ data: response.rows });
  } catch (error) {
    console.error("Error getting Applicants data:", error);
    return res.status(500).json({ errMsg: "Internal Server Error" });
  }
};

module.exports = { getApplicantData };
