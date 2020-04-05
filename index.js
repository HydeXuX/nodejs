const { Pool } = require('pg')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const connectionString = process.env.DATABASE_URL || "postgres://kazulcpubrkycx:cead1ff40a909457836e40a5e396411f50ff1b4c73b6968e78ecaffded269cf2@ec2-18-213-176-229.compute-1.amazonaws.com:5432/d8ebt4a3io8hr0?ssl=true"

var sql = "SELECT * preson";

pool.query(sql, function (err, result) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }

    // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
    console.log(result.rows);


});

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

