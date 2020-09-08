const jwt = require('jsonwebtoken')
const DB = require('../config/Database')

exports.login = (req, res) => {
  const { email, password } = req.body

  DB.connect(async (err, db) => {
    if (err) {
      return res
        .status(500)
        .json({ data: null, message: 'Database Error! Try Again !' })
    }

    const findUserByEmail = await db
      .collection('users')
      .find({ email })
      .toArray()

    if (findUserByEmail.length === 0) {
      return res
        .status(500)
        .json({ data: null, message: 'User Not Found !', field: 'email' })
    }

    const user = await db
      .collection('users')
      .find({ email, password })
      .toArray()

    if (user.length === 1) {
      const userData = {
        id: user[0]._id,
        name: user[0].name,
        email: user[0].email
      }
      const token = jwt.sign({ userData }, process.env.JWT_TOKEN, {
        expiresIn: 300
      })
      return res.status(200).json({ data: { token } })
    }
  })
}
