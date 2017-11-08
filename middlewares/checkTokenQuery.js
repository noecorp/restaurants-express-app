const checkTokenQuery = (req, res, next) => {
  process.env.newToken = 'jhbdaisfbasfjkaksf'
  console.log(process.env.newToken)
  const token = req.query.token
  if (token !== process.env.TOKEN) {
    res.status(403).send('Access denied, token wrong or missing')
  } else {
    next()
  }
}

module.exports = checkTokenQuery
