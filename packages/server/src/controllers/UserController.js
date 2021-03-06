const DB = require('../config/Database')
const { Hash } = require('../Utils/Hash')

exports.store = (req, res) => {
  let { name, email, password } = req.body
  password = Hash(password)
  DB.connect(async (err, db) => {
    if (err) {
      return res
        .status(500)
        .json({ data: null, message: 'Database Error! Try Again !' })
    }

    try {
      const user = await db
        .collection('users')
        .insert({ name, email, password })

      if (user) {
        const { _id, name, email } = user.ops[0]
        const userData = {
          id: _id,
          name,
          email
        }
        return res.status(200).json({ data: { user: userData } })
      }
    } catch (e) {
      if (err) {
        return res
          .status(500)
          .json({ data: null, message: 'Error! Try Again !' })
      }
    }
  })
}
