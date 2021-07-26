const express = require('express');
const app = express();

const middlewares = require('./app/middleware');
const routes = require('./routes');

app.use(middlewares);


app.use('/api', routes);


module.exports = app;
