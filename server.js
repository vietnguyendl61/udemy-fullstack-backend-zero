require('dotenv').config()

const express = require('express')
const app = express()
const config = require('./src/config/config')
const route = require('./src/routes/web')
const mysql = require('mysql2')

const port = process.env.PORT || 8001
const host_name = process.env.HOST_NAME || 'localhost'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'my_schema',
    password: 'mysql'
})

config(app)

app.use('/', route)

connection.query(
    'select * from Users',
    (err, results, fields) => {
        console.log(results)
        console.log(fields)
    }
)

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})
