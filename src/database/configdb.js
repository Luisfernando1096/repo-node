require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PSW,
  database: process.env.DB
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión:', err);
    return;
  }
  console.log('Conectado a la base de datos');
  connection.release();
});

module.exports = pool;
