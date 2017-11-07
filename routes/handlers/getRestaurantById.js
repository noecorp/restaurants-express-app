const Restaurant = require('../../models/restaurant')

function getRestaurantById (req, res) {
  Restaurant.find({_id: req.params.id}, req.filters.userFilters).limit(req.filters.limit)
              .then(restaurants => res.json(restaurants))
}

module.exports = getRestaurantById
