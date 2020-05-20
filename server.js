'use strict';

const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config({
  path: './.env'
})
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const routes = require('./app/routes');
const port = process.env.PORT || 8000;

mongoose.connect(process.env.database);
const db = mongoose.connection;

db.on('error', () => {
  console.log("Error connecting to database");
});
db.once('open', () => {
  console.log('Database Connected');
})

app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(port, function () {
  console.log('server started on port ', port);
});

exports = module.exports = app;