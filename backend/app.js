const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')

const logger = require('./utils/logger')


const blogsRouter = require('./controllers/blogs')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const testingRouter = require('./controllers/testing')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(result => {
    logger.info('yhteys tietokantaan saatu')
  })
  .catch(err => {
    logger.error('virhe yhteysotossa tietokantaan', err.message)
  })

app.use(cors())
app.use(bodyParser.json())

app.use(middleware.requestLogger)

app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

// if (process.env.NODE_ENV === 'test') {
//   const testingRouter = require('./controllers/testing')
//   app.use('/api/testing', testingRouter)
// }
app.use('/api/testing', testingRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
