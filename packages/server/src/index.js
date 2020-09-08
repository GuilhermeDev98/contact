require('dotenv-safe').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

var connections = {}

io.sockets.on('connection', socket => {
  socket.on('username', function (username) {
    connections[username] = socket.id
    console.log(connections)
  })
})

const routes = require('./routes')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/v1/', routes)

server.listen(process.env.APP_PORT, () => {
  console.log(`Server Running On Port ${process.env.APP_PORT}`)
})
