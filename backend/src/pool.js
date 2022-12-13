const Pool = require('pg').Pool;
require('dotenv').config({ path: './database-credentials/credentials.env' });

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10)
});

module.exports = {pool};