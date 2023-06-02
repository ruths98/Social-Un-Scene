const express = require('express');
const db = require('./config/connection');
// require models
// const {users} = require ('./models/users')
// const {thoughts} = require('./models/thoughts')
// const routes = require('./routes');

//returns the current working directory
const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  });
});