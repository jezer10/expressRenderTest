const pool = require('../database')

const productController = {}

productController.getAllProducts = async (req,res) => {
    try {
        const response = await pool.query('select * from product')
        return res.status(200).json(response.rows)
    } catch (error) {
        console.log(error)
    }
}

module.exports=productController