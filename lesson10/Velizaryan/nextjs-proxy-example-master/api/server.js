const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3001;

// place holder for the data
const tasks =
  {
    message: 'ok',
  };

app.use(bodyParser.json());

app.get('/api/sign-up', (req, res) => {
  console.log('api/sign-up called!')
  res.status(200).send(tasks);
});

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${port}</h1>`);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
