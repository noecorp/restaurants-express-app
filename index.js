const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise
require('dotenv').load()

const checkTokenQuery = require('./middlewares/checkTokenQuery')
const checkTokenHeaders = require('./middlewares/checkTokenHeaders')
const filtersApi = require('./middlewares/filters')

const routesRestaurants = require('./routes/restaurants')
const routesRestaurant = require('./routes/restaurant')
const routesToken = require('./routes/token')

const urlDb = 'mongodb://localhost:27017/test'

const app = express()

mongoose.connect(urlDb, { useMongoClient: true })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/token', routesToken)
app.use(checkTokenHeaders)
app.use(filtersApi)

app.use('/restaurants', routesRestaurants)
app.use('/restaurant', routesRestaurant)

app.listen(3000)
console.log('Listening on PORT 3000...')
