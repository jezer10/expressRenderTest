const boom = require('@hapi/boom')

const utils = {}

utils.renderizar = async (req, res, next) => {
    console.log(req)
    res.render('products', { products: req })
}
utils.notFound = async (req, res,next) => {
    res.send(boom.notFound("the path doesn't exist").output.payload)
}

module.exports = utils;