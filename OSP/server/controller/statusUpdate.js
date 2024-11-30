const pool = require("../config/db");

const statusUpdate = async (req, res) => {
  console.log("Reached statusUpdate");

  const{applicant_id,s_id,statusToUpdate} = req.body;

    

  try {
    let getQuery = `

    UPDATE osp.applied_in
      SET status = $1
      WHERE applicant_id = $2 AND scholarship_id = $3;
`;

    const response = await pool.query(getQuery,[statusToUpdate,applicant_id,s_id]);

    

     res.status(200).json(response.rows);
  } catch (error) {
    console.error("Error getting Applicants data:", error);
   return res.status(500).json({ errMsg: "Internal Server Error" });
  }
};

module.exports = { statusUpdate };
