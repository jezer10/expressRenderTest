const boom = require('@hapi/boom')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const router = require('express').Router();

router.post('/token',async (req,res,next)=>{
    passport.authenticate("basic",(error,user)=>{
        try {
            if(error||!user){
                next(boom.unauthorized());
            }
            req.login(user,{session:false},async (error,user)=>{
                if(error){
                    next(error)
                }
                const payload ={sub:user}
                const token=jwt.sign(payload,process.env.JWT_TOKEN_SECRET,{
                    expiresIn:"15m"
                })
            })
            return res.status(200).json(token);
        } catch (error) {

        }
    })
})

module.exports=router;