const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')

const checkTokenQuery = (req, res, next) => {
  const token = req.headers.token
  const keyPath = path.join(__dirname, '../key/public_key.pem')
  const cert = fs.readFileSync(keyPath)
  jwt.verify(token, cert, (err, payload) => {
    if (err) {
      res.status(403).send('Access denied, token wrong or missing')
    } else {
      next()
    }
  })
}

module.exports = checkTokenQuery
