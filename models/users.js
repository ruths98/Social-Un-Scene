const { Schema, model } = require('mongoose');
const usersSchema = require('./users');//change this to connect with associated information within this folder

// Schema to create Users model
const usersSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
        type:email,
        required: true,
    },
 
    thoughts: [thoughtsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Users = model('users', usersSchema);

module.exports = Users;