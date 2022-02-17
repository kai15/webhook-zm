const mysql = require('mysql2/promise')
// const async = require('async')

async function pool() {
    return await mysql.createPool({
        connectionLimit: 50,
        host: '206.189.45.186',
        user: 'dev',
        password: 'f!d123',
        database: 'fammi',
        debug: false,
    })
}

module.exports = pool()