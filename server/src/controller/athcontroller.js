const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../model/userModel");

exports.register = async (req, res) => {

    try {
        console.log(req.body)
        const { username, password, role } = req.body;

        const userExists = await User.findOne({ username });
        if (userExists)
            return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, role })
        await newUser.save();

        return res.status(201).json({ message: "User created successfully", data: newUser });
    } catch (error) {

        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user)
            return res.status(500).json({ message: "user not found" });
        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch)
            return res.status(500).json({ message: "password not matching" });
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            process.env.SECRETKEY,
            { expiresIn: "7d" })

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,    // ✅ Ensures cookies are sent only over HTTPS
            sameSite: "None",
        })
        res.status(200).json({ message: "logged in sucess" })


    }
    catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}
exports.logout = (req, res) => {
    try {
        res.clearCookie("token"); // Remove token from cookies
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
};

