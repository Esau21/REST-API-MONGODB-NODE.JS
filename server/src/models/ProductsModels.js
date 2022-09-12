const mongoose = require('mongoose');



const ProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            min: 12,
            max: 20,
        },
        price: {
            type: Number,
            require: true
        },
        fechaEntrada: {
            type: Date,
            require: true,
        },
        fechaVencimiento: {
            type: Date,
            require: true,
        }
    }
);


module.exports = mongoose.model("productos", ProductsSchema);