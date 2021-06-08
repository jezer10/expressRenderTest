const router = require('express').Router()

const { createProduct } = require('../../controllers/productController');
const productController = require('../../controllers/productController')


router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProduct);
router.post('/',productController.createProduct);
router.put('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);

module.exports = router