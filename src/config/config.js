const path = require('path')
const express = require('express')

const config = (app) => {
    // config view engine
    app.set('views', './src/views/')
    app.set('view engine', 'ejs')

    //config static file
    app.use(express.static('./src/public'))
}

module.exports = config