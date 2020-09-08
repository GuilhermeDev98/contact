const MongoClient = require('mongodb').MongoClient
let connection = null
let db = null

const connect = callback => {
  if (connection) return callback(null, db)

  MongoClient.connect(process.env.DB_URL, (err, conn) => {
    if (err) return callback(err, null)
    else {
      connection = conn
      db = conn.db(process.env.DB_NAME)
      return callback(null, db)
    }
  })
}

const disconnect = () => {
  if (!connection) return true
  connection.close()
  connection = null
  return true
}

module.exports = { connect, disconnect }
