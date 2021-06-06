
const utils = {}
utils.renderizar = async(req, res,next) => {
    console.log(req)
    res.render('products',{products:req})
}

module.exports = utils;