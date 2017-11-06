const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })
mongoose.Promise = global.Promise

const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(3000)
console.log('Listening on PORT 3000...')
