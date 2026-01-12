const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'RAFA#231023rafa',
  database: 'api_estados_cidades',
  waitForConnections: true,
  connectionLimit: 10,
  allowPublicKeyRetrieval: true,
  useSSL: false,
})

module.exports = pool
