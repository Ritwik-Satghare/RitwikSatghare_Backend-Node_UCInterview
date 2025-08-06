const express = require('express')
const episodeRoute = require('./routes/episodeRoute');
const showRoute=require('./routes/showroute');
const morgan = require('morgan');
const app = express()
const port = 3000

app.use(morgan('dev')); 

app.use('/episodes', episodeRoute)
app.use('/show-details', showRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
