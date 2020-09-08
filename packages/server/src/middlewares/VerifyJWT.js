const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  var token = req.headers.authorization.split(' ')[1]

  if (!token) {
    return res
      .status(401)
      .json({ data: null, message: 'Api token must be provided!' })
  }

  jwt.verify(token, process.env.JWT_TOKEN, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .json({ data: null, message: 'Failed to authenticate token!' })
    }

    req.userId = decoded.id
    next()
  })
}
