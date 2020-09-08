const DB = require('../config/Database')
const ObjectID = require('mongodb').ObjectID
const { v4: uuidv4 } = require('uuid')

const getTimestamp = () => {
  const date = new Date()
  const hour = `${date.getHours()}`.padStart(2, '0')
  const minute = `${date.getMinutes()}`.padStart(2, '0')
  const second = `${date.getSeconds()}`.padStart(2, '0')

  const day = `${date.getDate()}`.padStart(2, '0')
  const month = `${date.getMonth()}`.padStart(2, '0')
  const year = date.getFullYear()
  return `${hour}:${minute}:${second} ${day}/${month}/${year}`
}

exports.store = (req, res) => {
  const { message } = req.body

  console.log(req.params.chat_id, req.user.id, req.params.to)

  DB.connect(async (err, db) => {
    if (err) {
      return res
        .status(500)
        .json({ data: null, message: 'Database Error! Try Again !' })
    }

    const chat = await db.collection('chat').findOneAndUpdate(
      { _id: ObjectID(`${req.params.chat_id}`) },
      {
        $push: {
          messages: {
            id: uuidv4(),
            from: req.user.id,
            to: req.params.to,
            message: message,
            timestamps: getTimestamp()
          }
        }
      }
    )

    return res.status(200).json({ data: [chat.value] })
  })
}

/* {
  'users': ['5f56f6d69c11167802aa2b4a', '5f56f6d69c11167802aa2b4a'],
  'messages': [
    {
      'from': '5f56f6d69c11167802aa2b4a',
      'to': '5f56f6d69c11167802aa2b4a',
      'text': 'Olá Mundo !',
      'timestamps': '08:21:00 08/09/2020'
    }
  ]
} */

/* db.chat.insertOne({
  users: ['5f57d716677752b8ef410962', '5f57d716677752b8ef410962'],
  messages: [
    {
      from: '5f57d716677752b8ef410962',
      to: '5f57d716677752b8ef410962',
      text: 'Olá Mundo !',
      timestamps: '08:21:00 08/09/2020'
    }
  ]
})
 */
