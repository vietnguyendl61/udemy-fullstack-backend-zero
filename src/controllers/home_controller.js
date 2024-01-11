
const getHomepage = (req, res) => {
    res.send('Hello World!')
}

const getAbcpage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage,
    getAbcpage
}