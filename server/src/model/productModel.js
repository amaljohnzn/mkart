const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productname: { type: String, required: true, unique: true },
        productcategory: { type: String, required: true },
        productPrice: { type: Number, required: true }
    },
    { timestamps: true } // Adds createdAt and updatedAt
);

module.exports = mongoose.model('Product', productSchema);


