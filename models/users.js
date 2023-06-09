const { Schema, model, Types } = require('mongoose');
const thoughtsSchema = require('./thoughts');//change this to connect with associated information within this folder

// Schema to create Users model
const usersSchema = new Schema(
  {
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     default: () => new Types.ObjectId(),
    // },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        }
      }
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }]
    //can I delete the friend schema?
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Users = model('users', usersSchema);

module.exports = Users;