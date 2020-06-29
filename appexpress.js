const express = require('express');
const path = require('path');


const app = express();

app.get('/', ((req, res) => res.send('hello world from express')));

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'));
  });

  app.get('/api/users', (req, res) => {
    const users = [
      { name: 'bob5', age: 23 },
      { name: 'bob3', age: 33 },
    ];
  
    res.json(users);
  });


app.listen(5000, () => {

    console.log("server running")
});