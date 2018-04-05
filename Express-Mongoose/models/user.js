const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema ({
    nama : String,
    usia : Number
});

const User = mongoose.model('user', userSchema);
//it will create a 'users' collection!

module.exports = User;