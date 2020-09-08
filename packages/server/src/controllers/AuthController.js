const jwt = require('jsonwebtoken')
const { Compare } = require('../Utils/Hash')
const DB = require('../config/Database')

exports.login = (req, res) => {
  const { email, password } = req.body

  DB.connect(async (err, db) => {
    if (err) {
      return res
        .status(500)
        .json({ data: null, message: 'Database Error! Try Again !' })
    }

    const user = await db.collection('users').find({ email }).toArray()

    if (user.length === 0) {
      return res
        .status(500)
        .json({ data: null, message: 'User Not Found !', field: 'email' })
    }

    if (await Compare(password, user[0].password)) {
      const userData = {
        id: user[0]._id,
        name: user[0].name,
        email: user[0].email
      }
      const token = jwt.sign({ userData }, process.env.JWT_TOKEN, {
        expiresIn: 300 * 60
      })
      return res.status(200).json({ data: { token } })
    } else {
      return res
        .status(500)
        .json({ data: null, message: 'Password Incorrect!', field: 'password' })
    }
  })
}
