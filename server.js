const express = require('express');
const db = require('./config/connection');
const { MongoClient } = require('mongodb');
// require models
// const {users} = require ('./models/users')
// const {thoughts} = require('./models/thoughts')
// const routes = require('./routes');

//returns the current working directory
const cwd = process.cwd();

const PORT = process.env.port || 3001;
const app = express();

const connectionStringURI = 'mongodb://1127.0.0.1:27017'
const client = new MongoClient(connectionStringURI);
// client.connect()
// .then(() => {
// console.log('Connected to MongoDB!')
// db = client.db(socialUnSceneDB);
//   app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}!`);
//   });

// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  });
});