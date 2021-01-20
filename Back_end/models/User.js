const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        bio: {
            type: String,
        },
        phone: {
            type: String,
        },
        admin: {
            type: Boolean,
            default: false,
        },
        savedSneakers: [],
        purchasedSneakers: [],
        sellingSneakers: [],
    },
    {
        timestamps: true,
        collection: 'users',
    }
);
module.exports = mongoose.model('User', userSchema);
