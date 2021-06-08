const router = require('express').Router();

const userController = require('../../controllers/users')

router.get('/', userController.getUsers)
router.get('/:id', userController.getUser)
router.post('/', userController.createUser)
router.delete('/:id', userController.deleteUser)
module.exports = router