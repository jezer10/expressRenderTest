const p = require('../database')
const chalk = require('chalk')

const encrypt = require('../utils/encrypt')

class usersService {

    constructor() {

    }

    async getUser(userId) {
        try {
            const res = await p.query('select * from usertab where iduser=$1', [userId])
            return res.rows[0];
        } catch (error) {
            console.log(chalk.red.italic(error))
        }

    }

    async getUsers() {
        try {
            const res = await p.query('select * from usertab')
            return res.rows
        } catch (error) {
            console.log(chalk.red(error))
        }
    }

    async createUser(user) {
        try {
            let { role } = user
            const { username, password } = user
            if (typeof role == 'undefined') {
                role = 2
            }
            const encryptedPassword = await encrypt.encryptPassword(password);
            const response = await p.query('insert into usertab (username,password,idrole) values ($1,$2,$3)', [username, encryptedPassword, role])
            return response.rowCount;
        } catch (error) {
            console.log(chalk.red(error))

        }
    }

    async updateUser(user) {
        try {
            let { role } = user
            const { iduser, username, password } = user
            if (typeof role == 'undefined') {
                role = 2
            }
            const encryptedPassword = await encrypt.encryptPassword(password);
            const response = await p.query('update  usertab set username=$2 ,password=$3,idrole=$4 where iduser=$1', [iduser, username, encryptedPassword, role])
            return response.rowCount;
        } catch (error) {
            console.log(chalk.red(error))

        }

    }

    async deleteUser(userId) {
        try {
            const response = await p.query('delete from usertab where iduser=$1', [userId])
            return response.rowCount
        } catch (error) {
            console.log(chalk.red(error))
        }
    }

    async hasUsername({ }) {

    }

    async hasUser({ username, password }) {
        try {
            const response = await p.query('select * from usertab where username=$1', [username])
            if (response.rows.length === 1) {
                const encryptedPassword = response.rows[0]['password']
                const exists = encrypt.comparePassword(password, encryptedPassword)
                return exists
            }
            return false;

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = usersService;