var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'tomoh88',
    password : 'rlawlgns12!',
    database : 'test'
});

module.exports = db;