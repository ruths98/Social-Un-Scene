const { Schema, model, Types } = require('mongoose');
const userSchema = require('./users.js');//change this to connect with associated information within this folder

// Schema to create Friend model
const friendSchema = new Schema(
  {
      username: {
    type: Schema.Types.ObjectId,
    ref:'Users'
    },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   validate: {
    //     validator: function(v) {
    //       return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
    //     }
    //   }
    // },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
  
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Friend = model('friend', friendSchema);

module.exports = Friend;