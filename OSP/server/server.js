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
