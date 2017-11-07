const express = require('express')
const router = express.Router()
const aplyUserFilters = require('./handlers/filters')

const getRestaurants = require('./handlers/getRestaurants')
const getRestaurantById = require('./handlers/getRestaurantById')
const getRestaurentByborough = require('./handlers/getRestaurentByborough')

router.use((req, res, next) => {
  req.filters = aplyUserFilters(req.query)
  next()
})
router.get('/restaurants', getRestaurants)
router.get('/restaurants/borough/:borough', getRestaurentByborough)
router.get('/restaurant/:id', getRestaurantById)
// router.put('/restaurant/:id', updateRestaurantById)
// router.delete('/restaurant/:id', removeRestaurantById)

module.exports = router
