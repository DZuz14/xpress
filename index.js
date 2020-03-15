/* eslint-disable no-console */
const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const router = require('./router')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

router(app)

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)

console.log('Server has been started, and is listening on port: ' + port)
