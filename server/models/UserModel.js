const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profilePic: {
        type: String
    }
},
    { timestamps: true })

    const User = mongoose.model("User",userShema)


    module.exports = User ;