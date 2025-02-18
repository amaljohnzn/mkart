const express = require("express");
const router = express.Router();
const { auth, adminonly } = require("../middileware/auth");
const {createProduct,updateProduct,deleteProduct,getProductById,getProducts} = require("../controller/productController");

// Public routes
router.get("/",getProducts);
router.get("/:id", getProductById);

// Admin-only routes
router.post("/", auth, adminonly, createProduct);
router.put("/:productname", auth, adminonly, updateProduct);
router.delete("/:productname", auth, adminonly, deleteProduct);

module.exports = router;




