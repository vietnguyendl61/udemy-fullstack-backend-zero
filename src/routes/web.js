const express = require('express')
const router = express.Router()
const { getHomepage, getAbcpage } = require('../controllers/home_controller')

router.use((req, res, next) => {
    console.log('Time: ', Date.now().toString())
    next()
})

router.get('/', getHomepage)
router.get('/abc', getAbcpage)

module.exports = router