const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../model/userModel");

exports.auth = async (req, res, next) => {
    try {
      
        const token = req.cookies.token;

    
        if (!token) {
            return res.status(401).json({ message: "Authentication failed: No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(404).json({ message: "User not found" });

        }

        next(); 
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token", error: error.message });
    }
};

// Admin-Only 
exports.adminonly = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized: No user data found" });
        }

        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Access denied: Admins only" });
        }

        next(); 
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};


