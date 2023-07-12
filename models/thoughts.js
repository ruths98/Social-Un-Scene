const { Schema, model, Types} = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: { //who posted it
            ref: 'Users',
            type: String,
            required: true,
            maxlength: 50,
        },
        thoughtText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        // reactions: [reactionSchema]//create this
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);
const Thoughts = model('Thought', thoughtsSchema);

module.exports = Thoughts;