const express = require('express')
const testController = require('./src/controllers/test.controller.js')

const server = express()

server.get('/test', testController)

server.listen(4000, () => {
  console.log('server running')
})