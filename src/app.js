const express = require('express');
const bodyParser = require('body-parser');
const profile = require('../routes/profile');

const app = express();

app.use(bodyParser.json());
app.use('/profile', profile);

app.use((err, req, res, next) => {
    res.json(err);
})

module.exports = app;