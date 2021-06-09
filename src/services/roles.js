const p = require('../database')
class RolesService {

    constructor() {

    }

    async getRoles() {
        try {
            const response = await p.query('select * from roles')
            return response.rows;
        } catch (error) {
            console.log(error)
        }
    }

    async getRoleByUsername(username) {
        try {
            const response = await p.query('select r.rolename from usertab u join role r on (u.idrole=r.idrole) where username= ')
            return response.rows
        } catch (error) {
            console.log(error)
        }
    }

    async getUsersByRoleName(roleName) {
        try {
            const response = await p.query('select u.username from usertab u join role r on (u.idrole=r.idrole) where r.rolename=$1', [roleName])
            return response.rows

        } catch (error) {
            console.log(error)
        }
    }

}