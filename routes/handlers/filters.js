function filterSearch (query) {
  let showInfo = query.show ? query.show.split(',') : []
  let hideId = query.hide_id || ''
  showInfo = showInfo.reduce((acc, item) => {
    acc[item] = 1
    return acc
  }, {})
  if (hideId) {
    showInfo._id = 0
  }
  console.log(showInfo)
  return showInfo
}

function limit (query) {
  const limitResponse = parseInt(query.limit, 10)
  return limitResponse
}

function aplyUserFilters (query) {
  const userFilters = {}
  userFilters.userFilters = filterSearch(query)
  userFilters.limit = limit(query)
  return userFilters
}

module.exports = aplyUserFilters
