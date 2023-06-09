const { Schema, Types, model} = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: { //who posted it
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
const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;