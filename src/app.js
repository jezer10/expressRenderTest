const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const app = express();
const productRoutes = require('./routes/api/products')
const userRoutes = require('./routes/api/users')

//app.engine("jsx",path.join(__dirname,"jsxFormat.js"))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.set('view engine', "pug")
app.set('views', path.join(__dirname, "views"))


app.get('/', (req, res) => {
    res.render('index', { hello: 'Hola', world: 'Mundo',symbol: '!' })
})

app.use('/api/v1/products',productRoutes)
app.use('/api/v1/users',userRoutes)
module.exports = app;