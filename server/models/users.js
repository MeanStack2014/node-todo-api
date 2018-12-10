const mongoose = require('mongoose');

var Users = mongoose.model('Users',{
    name:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    address: {
        type: String,
        default: 'kolkata'
    },
    addedAt:{
        type: Number,
        default: null
    }
});
var newUser = new Users({
    name: '  Raja Basu ',
    
});

module.exports = {Users};