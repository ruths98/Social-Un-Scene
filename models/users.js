const { Schema, model, Types } = require('mongoose');
// const thoughtsSchema = require('./thoughts');//change this to connect with associated information within this folder

// Schema to create Users model
const usersSchema = new Schema(
  {
       username: {
      type: String,
      required: true,
      unique: true,
      max_length: 50,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        validator: {

        }
    },
 
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thoughts'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'users',
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Users = model('users', usersSchema);

module.exports = Users;