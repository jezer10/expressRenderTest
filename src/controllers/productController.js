const pool = require('../database')

const productController = {}

productController.getAllProducts = async (req, res, next) => {
    try {
        const response = await pool.query('select * from product')
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
    }
}

productController.getProduct = async (req, res, next) => {
    try {

    } catch (error) {

    }
}

productController.createProduct=async (req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}

productController.updateProduct= async (req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}

productController.deleteProduct= async (req,res,next)=>{
    try {
        
    } catch (error) {
        
    }
}
module.exports = productController