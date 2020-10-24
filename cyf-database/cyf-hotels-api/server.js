const express = require('express');
const app = express();
const { Pool } = require('pg');

const pool = new Pool({
    ser: 'postgres',
    host: 'localhost',
    database: 'cyf_hotels',
    password: '',
    port: 5432
});

app.get('/hotels', (req, res) => {
    pool.query('select * from hotels', (error, result) => {
        res.json(result.rows);

    });
});

app.listen(3100, () => {
    console.log("Server is listening on port 3100!")
});