const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app