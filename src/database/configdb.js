const mysql = require('mysql')
const { promisify } = require('util')

console.log(process.env.HOST);

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
    multipleStatements: true
})

pool.getConnection((error, connection) => {
    if (error) {
        console.log(error);
        return
    }
    if(connection){
        connection.release()
        console.log("Database conected");
        return
    }
})

pool.query = promisify(pool.query)
module.exports = pool
