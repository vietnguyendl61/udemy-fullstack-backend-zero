require('dotenv').config()

const express = require('express')
const app = express()
const config = require('./src/config/config')
const route = require('./src/routes/web')
const port = process.env.PORT || 8001
const host_name = process.env.HOST_NAME || 'localhost'

config(app)

app.use('/', route)

app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})
