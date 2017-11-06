const express = require('express')
const router = express.Router()

const getRestaurants = require('./handlers/getRestaurants')
// const addRestaurant = require('./handlers/addRestaurant')
//
// const getRestaurantById = require('./handlers/getRestaurantById')
// const updateRestaurantById = require('./handlers/updateRestaurantById')
// const removeRestaurantById = require('./handlers/removeRestaurantById')

router.get('/restaurants', getRestaurants)
// router.post('/restaurants', addRestaurant)
//
// router.get('/restaurant/:id', getRestaurantById)
// router.put('/restaurant/:id', updateRestaurantById)
// router.delete('/restaurant/:id', removeRestaurantById)

module.exports = router
