const Restaurant = require('../../models/restaurant')

function getRestaurants (req, res) {
  Restaurant.find({}, req.filters.userFilters).limit(req.filters.limit)
              .then(restaurants => res.json(restaurants))
}

module.exports = getRestaurants
