const express = require('express');
const app = express();
const cors = require('cors');

const lessons = [
    { 'topic': 'math', 'location': 'London', 'price': 100 },
    { 'topic': 'math', 'location': 'Liverpool', 'price': 80 },
    { 'topic': 'math', 'location': 'Oxford', 'price': 90 },
    { 'topic': 'math', 'location': 'Bristol', 'price': 120 },
]

const user = {'email': 'user@email.com', 'password':'mypassword'};

app.use(cors())

app.get('/lessons', function(req, res){

   res.send(lessons);
})

app.get('/user', function(req, res){
    res.send(user)
})


  app.listen(3000);