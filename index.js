const express = require('express')
const createLocaleMiddleware = require('express-locale')

const polyglotMiddleware = require('./src/middlewares/polyglot.middleware.js')
const testController = require('./src/controllers/test.controller.js')

const server = express()

server.use(createLocaleMiddleware())
server.use(polyglotMiddleware)

server.get('/test', testController)

server.listen(4000, () => {
  console.log('server running')
})