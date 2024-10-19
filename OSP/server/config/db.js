
const { Pool } = require("pg");
require("dotenv").config();


const pool = new Pool({
 
    // connectionString: process.env.DATABASE_URL,
    //testDB
    connectionString: "postgresql://ospdb_user:plPDKR20OhfDsB5wSEBOGilf9RKr7Xea@dpg-crts9d52ng1s73ceertg-a.singapore-postgres.render.com/ospdb",
    ssl: true, 
  });


  const createTablesQuery = `
CREATE TABLE USERS(
  	id SERIAL PRIMARY KEY,
  	username TEXT,
  	email TEXT,
  	password TEXT,
  	pic TEXT
);

`;

pool
  .query(createTablesQuery)
  .then(() => {
    console.log("Tables successfully created or already exist.");
  })
  .catch((err) => {
    console.error("Creating tables:", err.message);
  });





  module.exports = pool;
