const express = require('express');
const bodyParser = require('body-parser');
const interactions = require('../routes/interactions');

const app = express();

app.use(bodyParser.json());
app.use('/interactions', interactions);

app.use((err, req, res, next) => {
    res.json(err);
})

module.exports = app;