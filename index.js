const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(require('body-parser').json())
app.use(require('compression')())
app.use(require('cors')({
  credentials: true,
  methods: ['OPTION', 'GET', 'POST', 'PUT', 'DELETE'],
  origin: '*'
}))

app.use(require('./router'))

app.listen(3303, () => console.log("Server started on http://localhost:3303/api"))