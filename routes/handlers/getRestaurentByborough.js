const Restaurant = require('../../models/restaurant')

function getRestaurentByborough (req, res) {
  let borough = req.params.borough.split('')
  borough[0] = borough[0].toUpperCase()
  borough = borough.join('')
  console.log(req.filters.filters)
  Restaurant.find({borough: borough}, req.filters.userFilters).limit(req.filters.limit)
              .then(restaurants => res.json(restaurants))
}

module.exports = getRestaurentByborough
