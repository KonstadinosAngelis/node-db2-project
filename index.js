const express = require('express')
const dealerRoute = require('./data/posts/dealer-router')

const server = express();

server.use(express.json());
server.use('/api/dealer', dealerRoute)

server.listen(5000, () => {
  console.log("Server is listening on port 5000")
})
