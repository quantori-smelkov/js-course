const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3001;

// place holder for the data
const tasks =
  {
    text: 'Hello word',
  };

app.use(bodyParser.json());

app.get('/api/sign-up', (req, res) => {
  console.log('api/todos called!')
  res.json(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
