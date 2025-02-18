const Product = require("../model/productModel");

//  Create a new product (Admin only)
exports.createProduct = async (req, res) => {
    try {
        const { productname, productcategory, productPrice } = req.body;

        if (!productname || !productcategory || !productPrice) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newProduct = new Product({
            productname,
            productcategory,
            productPrice,
        });

        await newProduct.save();
        return res.status(201).json({ message: "Product created successfully", data: newProduct });

    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

//  Get all products (Public)
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

//  Get a single product by ID (Public)
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Update a product by name (Admin only)
exports.updateProduct = async (req, res) => {
    try {
        const { productname } = req.params;
        const updatedProduct = await Product.findOneAndUpdate(
            { productname }, 
            req.body, 
            { new: true }
        );

        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

        return res.status(200).json({ message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Delete a product by name (Admin only)
exports.deleteProduct = async (req, res) => {
    try {
        const { productname } = req.params;
        const deletedProduct = await Product.findOneAndDelete({ productname });

        if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

        return res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

