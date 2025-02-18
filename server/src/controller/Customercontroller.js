const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../model/userModel"); 

module.exports.getallCustomer = async (req, res) => {
    try {
        const Customer = await User.find({ role: "Customer" }).select('-password');
        res.json(Customer);
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
       
    }
}

exports.getProfile = (req, res) => {
    try {
        res.status(200).json({ message: "User profile retrieved", user: req.user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

