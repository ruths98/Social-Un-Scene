const { Schema, Types } = require('mongoose');

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
        thoughtContent: {
            type: String,
            required: true,
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
const thoughts = model('thoughts', thoughtsSchema);

module.exports = thoughtsSchema;