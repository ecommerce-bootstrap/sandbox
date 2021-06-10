const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());
const profile = require( './routes/api/profile' );
app.use( '/api/profile/', profile );

app.get('/', (req, res) => {
    res.json('you are at 7890');
  });

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));


module.exports = app;
