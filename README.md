# Postgres + Express API

Node.js app that connects to PostgreSQL and serves student data through a small Express API.

## Setup

1. Install and start PostgreSQL (port 5432)
2. Create a `students` table:
   ```sql
   CREATE TABLE students (
     id SERIAL PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100)
   );
   ```
3. `npm install`
4. Copy `.env.example` to `.env` and fill in your values
5. Run:
   - `node app.js` tests the connection and prints all students
   - `node server.js` starts the API

## Endpoints

- `GET /` returns "Server is running"
- `GET /students` returns all students as JSON

## Stack

- Node.js
- Express
- pg
- dotenv
