const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        // required: true,
    },
    lname: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    },
    homeAddress: {
        country: String,
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: String
    },
    shippingAddress: [
        {
            country: String,
            street1: String,
            street2: String,
            city: String,
            state: String,
            zip: String
        },
    ],
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model('User', UserSchema)
module.exports = User