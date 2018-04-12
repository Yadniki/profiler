const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }

});

const User = module.exports = mongoose.model('Users', UserSchema);