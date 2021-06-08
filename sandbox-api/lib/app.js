const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json('you are at 7890');
  });

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
