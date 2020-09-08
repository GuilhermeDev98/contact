const DB = require('../config/Database')
const ObjectID = require('mongodb').ObjectID
const { v4: uuidv4 } = require('uuid')

exports.store = (req, res) => {
  const { message } = req.body

  DB.connect(async (err, db) => {
    if (err) {
      return res
        .status(500)
        .json({ data: null, message: 'Database Error! Try Again !' })
    }

    const bla = await db.collection('chat').findOneAndUpdate(
      { _id: ObjectID('5f5769b014f502df5d31bd0e') },
      {
        $push: {
          messages: {
            id: uuidv4(),
            from: '12345',
            to: '123456',
            message: message,
            timestamps: '08:46:00'
          }
        }
      }
    )

    return res.status(200).json({ data: [bla.value] })
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
