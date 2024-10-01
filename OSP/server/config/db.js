const { config } = require("dotenv");
const { Pool } = require("pg");
require("dotenv").config();


const pool = new Pool({
 
  
    connectionString: process.env.DATABASE_URL,
    ssl: true, 
  });



  pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err.message);
    process.exit(1); // Exit the application on connection error
  });



  module.exports = pool;