const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'W@rafaMYSQL@12',
  database: 'estados_cidades',
})

module.exports = pool
