const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const scholarshipRoutes = require("./Routes/scholarshipRoutes");

const port = process.env.PORT || 8080;

dotenv.config();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/user", userRoutes);
app.use("/api/scholarship", scholarshipRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.put('/admin/:id',(req,res) =>{
    pool.editScholarship(parseInt(req.param.id),req.body).then(
        ()=>{
            res.status(200).json({
              message:"Scholarship was Updated Successfully!!"
            });
        }
      ).catch((err) => {
        res.status(303).json({
          message:"Error Occured" + err.message
        })
      });
});

app.delete('/admin/:id',(req,res) =>{
  pool.deleteScholarship(parseInt(req.param.id),req.body).then(
      (scholarshipName)=>{  //Checks if any present with name as scholarshipName in database then deletes it.
          res.send(scholarshipName);
      }
    ).catch((err) => {
      res.send(err.message);
    });
});