const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const pool = require("./config/db");

const port = process.env.PORT || 8080;

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
