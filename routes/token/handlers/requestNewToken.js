const jwt = require('jsonwebtoken')
const path = require('path')
const fs = require('fs')

function requestNewToken (req, res) {
  const keyPath = path.join(__dirname, '/key/private.pem')
  const cert = fs.readFileSync(keyPath)
  console.log(cert)
  const userToken = jwt.sign({}, cert, {algorithm: 'RS256'})
  res.status(202).json({token: userToken})
}

module.exports = requestNewToken
