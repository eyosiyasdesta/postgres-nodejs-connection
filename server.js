require("dotenv").config();
const { Pool } = require("pg");
const express = require("express");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const server = express();
server.get("/", (req, res) => {
  res.send("Server is running");
});
server.get("/students", (req, res) => {
  pool.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result.rows);
  });
});

server.listen(3000, () => console.log("Server on 3000"));
