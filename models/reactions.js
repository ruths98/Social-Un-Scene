const { Schema, model, Types } = require('mongoose');

const reactionsSchema = new Schema(
{
    thoughtId: {
      ref: 'thoughts',
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionType: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 4,
        default: 'no reaction',
      },
   
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        getters: true,
      },
      id: false,
}
);

module.exports = reactionsSchema;