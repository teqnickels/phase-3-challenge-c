const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const interleave = require('interleave-array')

app.use(bodyParser.json())

app.get('/api/shout/:word', (request, response) => {
  let word = request.params.word
  word = word.toUpperCase().concat("!!!")
  
  response.set('content-type', 'text/plain')
    .send(word)
    .sendStatus(200)
})

app.post('/api/array/merge', (request, response) => {
  response.set('content-type','application/json')
  const body = request.body
  const array1 = body.a
  const array2 = body.b  
  if (Array.isArray(array1) && Array.isArray(array2)) {
    let combinedArray = interleave(array1, array2)
    let result = {"result": combinedArray}
    response.json(result)
  }else{
    throw 'Entry must be an array'
  }
});

app.listen(3000, () => {
  console.log('Server running on 3000')
})

