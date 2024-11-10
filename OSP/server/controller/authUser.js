const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const generateToken = require("../config/generateToken");

const authUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("Reached Login");

  try {
    const userExists = await pool.query(
      `select * from osp.users where email='${email}'`
    );

    if (userExists.rows.length) {
      bcrypt.compare(
        password,
        userExists.rows[0].password,
        function (err, response) {
          if (response) {
            // console.log(userExists.rows)
            res.status(201).json({
              id: userExists.rows[0].id,
              name: userExists.rows[0].username,
              email: userExists.rows[0].email,
              pic: userExists.rows[0].pic,
              token: generateToken(userExists.rows[0].id),
            });

            console.log("Login Successful")
          } else {
            console.log(err);
            res
              .status(401)
              .json({ success: false, message: "Invalid Password" });
          }
        }
      );
    } else {
      res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
   } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err });
  }
};

module.exports = authUser;
