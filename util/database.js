const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'yourlocalstore',
    password: 'root'
});

// Calling promise will help in using promises.
module.exports = pool.promise();