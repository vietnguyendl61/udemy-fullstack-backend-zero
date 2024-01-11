const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Time: ', Date.now().toString())
    next()
})

router.get('/', (req, res) => {
    res.send('Hello World abc!')
})

router.get('/abc', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router