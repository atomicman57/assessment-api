const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const dbConfig = require('./config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.DATABASE_URI, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
app.use(helmet());

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Assessment API" });
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});