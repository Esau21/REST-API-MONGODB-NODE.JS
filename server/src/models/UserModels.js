const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 8,
            max: 15,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
            min: 8,
            max: 12,
        },
        confirmpassword: {
            type: String,
            require: true,
            min: 8,
            max: 12,
        }
    }
);





module.exports = mongoose.model("usuarios", UserSchema);