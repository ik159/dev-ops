const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name : {
        type : String ,
        required: [true , 'Please enter your name']
    },
    email : {
        type : String ,
        required: [true , 'Please enter your email']
    }
})

module.exports = mongoose.model('postUserModel' , postSchema);