const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
  const { email, password } = req.body

  if (email && password) {
    const id = 1
    var token = jwt.sign({ id }, process.env.JWT_TOKEN, {
      expiresIn: 300
    })
    return res.status(200).json({ data: { token } })
  }

  return res
    .status(500)
    .json({ data: null, message: 'Invalid Data! Try Again !' })
}
