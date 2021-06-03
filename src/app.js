const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path=require('path')
const app = express();
const productRoutes = require('./routes/productRoutes')

//app.engine("jsx",path.join(__dirname,"jsxFormat.js"))


app.use(cors())
app.use(morgan('dev'))

app.set('view engine',"pug")
app.set('views',path.join(__dirname,"views"))


app.get('/',(req,res)=>{
    res.render('index',{hello:'Hola',world:'mundo'})
})

app.use('/products',productRoutes)

module.exports = app;