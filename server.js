const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 8001
const host_name = process.env.HOST_NAME || 'localhost'

app.set('views', './src/views/')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})


app.listen(port, host_name, () => {
    console.log(`Example app listening on port ${port}`)
})
