
const { Pool } = require("pg");
require("dotenv").config();


const pool = new Pool({
 
    // // connectionString: process.env.DATABASE_URL,
    // //testDB
    // connectionString: "postgresql://ospdb_user:plPDKR20OhfDsB5wSEBOGilf9RKr7Xea@dpg-crts9d52ng1s73ceertg-a.singapore-postgres.render.com/ospdb",
    // ssl: true, 
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "admin@123",
      database: "OSP",
      searchPath: ['osp']
  });



pool.connect().then(() => {
    console.log("Tables successfully created or already exist.");
  })
  .catch((err) => {
    console.error(err);
  });





  module.exports = pool;
