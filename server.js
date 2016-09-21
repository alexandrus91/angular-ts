var express = require('express')
var app = express()
 
app.get('/test.json', function (req, res) {
  //console.log("post")
  res.header('Access-Control-Allow-Origin', ['*'])
  res.send(JSON.stringify([
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
]))
})
 
app.listen(5000)