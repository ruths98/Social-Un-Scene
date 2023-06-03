const connection = require('../config/connection');
const { Users, Thoughts } = require('../models');//why is Users green but Thoughts is blue?
const { generateUsers, assignThoughts } = require('./data');//functions from data.js file

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

   
});
