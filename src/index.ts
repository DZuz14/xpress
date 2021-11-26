/* eslint-disable no-console */
import express from 'express'
import mongoose from 'mongoose'
import http from 'http'
import cors from 'cors'
import morgan from 'morgan'

import exampleRoutes from './routes/example'

mongoose.connect('mongodb://localhost/<changeme>')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.use('/example', exampleRoutes)

const port = process.env.PORT || 3090
const server = http.createServer(app)
server.listen(port)

console.log('Server has been started, and is listening on port: ' + port)
