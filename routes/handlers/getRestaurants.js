const Restaurant = require('../../models/restaurant')

function getRestaurants (req, res) {
  let showInfo = req.query.show ? req.query.show.split(',') : []
  let hideId = req.query.hide_id || ''
  console.log(hideId)
  console.log()
  showInfo = showInfo.reduce((acc, item) => {
    acc[item] = 1
    return acc
  }, {})
  if (hideId) {
    showInfo._id = 0
  }
  Restaurant.find({}, showInfo).limit(20)
              .then(restaurants => res.json(restaurants))
}

module.exports = getRestaurants
