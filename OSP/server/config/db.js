const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({

  connectionString: process.env.DATABASE_URL,
  ssl:true
 
});

pool
  .connect()
  .then(() => { 
    console.log("Database is successfully Connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = pool;
