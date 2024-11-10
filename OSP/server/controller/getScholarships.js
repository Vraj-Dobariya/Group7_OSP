const pool = require("../config/db");

const getScholarships = async (req, res) => {
  console.log("Reached getScholarships");

  try {
    const getQuery = `SELECT * FROM osp.Scholarships`;

    const response = await pool.query(getQuery);

    res.status(200).json(response.rows); // Send only one response
  } catch (error) {
    console.error("Error getting scholarship list:", error.message);
    res.status(500).json({
      errMsg: "Internal Server Error",
    });
  }
};

module.exports = { getScholarships };
