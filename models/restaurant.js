const mongoose = require('mongoose')
const Schema = mongoose.Schema

var RestaurantSchema = new Schema({
  name: String,
  borough: String,
  cuisine: String,
  address: {
    building: String,
    street: String,
    zipcode: String,
    coord: [Number]
  },
  grades: [{
    date: Date,
    grade: String,
    score: Number
  }]
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)
