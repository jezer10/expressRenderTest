const express = require('express')

const router = express.Router();

const passport = require('passport')
require('../../utils/auth/jwt')
const productController = require('../../controllers/products')


router.get('/', passport.authenticate("jwt", { session: false }), productController.getProducts);
router.get('/:id', productController.getProduct);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router