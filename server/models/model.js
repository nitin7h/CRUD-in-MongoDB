const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})

const User = new mongoose.model("crud", userSchema)

module.exports = User;