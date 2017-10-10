const express = require("express")
const app = express()
const bodyParser = require("body-parser")


app.get('/api/shout/:word', (request, response) => {
  let word = request.params.word
  word = word.toUpperCase().concat("!!!")
  
  response.set('content-type', 'text/plain')
  response.send(word)
})

app.listen(3000, () => {
  console.log('Server running on 3000')
})

