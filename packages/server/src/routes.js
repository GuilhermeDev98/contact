const express = require('express')

const routes = express.Router()

const VerifyJWT = require('./middlewares/VerifyJWT')

const AuthController = require('./controllers/AuthController')
const ChatController = require('./controllers/ChatController')
const UserController = require('./controllers/UserController')

routes.post('/auth/login', AuthController.login)
routes.get('/chat', VerifyJWT, ChatController.store)

routes.post('/users', UserController.store)

module.exports = routes
