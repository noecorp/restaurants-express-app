const users = require('../../../data/users.json')
const checkLogin = (req, res, next) => {
  const userInput = req.body
  users.forEach(function (user, index) {
    if (user.mail === userInput.user && user.password === userInput.password) {
      next()
    }
  })
  res.status(403).send('Login error, mail or password wrong')
}

module.exports = checkLogin
