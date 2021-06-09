const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const UsersService = require('../../services/users')
const userService = new UsersService;
passport.use(
    new BasicStrategy(
        async (username, password, next) => {
            try {

                if(!userService.hasUser({username,password})){

                }


            } catch (error) {
                return cb(error)
            }
        }
    )
)
