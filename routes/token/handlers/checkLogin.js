const users = require('../../../data/users.json')
const checkLogin = (req, res, next) => {
  const userInput = req.body
  const user = users.find(user =>
    user.mail === userInput.user && user.password === userInput.password)
  if (user) {
    next()
  } else {
    res.status(401).send('Login error, mail or password wrong')
  }
}

module.exports = checkLogin
