const usersService = require('../services/users')

const userService = new usersService;

const userController = {}

userController.getUser = async (req, res) => {
    try {
        const iduser = req.params.id
        const response = await userService.getUser(iduser);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal server error')
    }
}

userController.getUsers = async (req, res) => {
    try {
        const response = await userService.getUsers();
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal server error')

    }
}

userController.createUser = async (req, res) => {
    try {

        const user = req.body
        const response = await userService.createUser(user)

        return res.status(201).json(response);

    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal server error')

    }
}

userController.deleteUser = async (req, res) => {
    try {
        const iduser = req.params.id;
        const response = await userService.deleteUser(iduser);
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json('Internal server error')

    }

}

module.exports = userController