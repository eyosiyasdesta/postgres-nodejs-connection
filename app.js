require("dotenv").config();
const postgres = require("pg");
const client = new postgres.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
client.connect((err) => {
  if (err) {
    console.error(err.message);
    return;
  } else {
    console.log("Connected Successfully on port", process.env.DB_PORT);
  }
  client.query("select * from student", (err, res) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(res.rows);
    }
    client.end();
  });
});
