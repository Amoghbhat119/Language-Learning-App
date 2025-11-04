import bcrypt from "bcrypt";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";


export const registerUser = async (req, res) => {
  try {
    let { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    email = email.trim().toLowerCase();

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const passwordHash = await bcrypt.hash(password.trim(), 10);
    const user = await User.create({ name: name.trim(), email, passwordHash });

    const token = generateToken(user._id);
    return res.status(201).json({
      message: "Registered successfully",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (e) {
    console.error("Register error:", e);
    return res.status(500).json({ message: "Server error" });
  }
};


export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    email = email.trim().toLowerCase();
    password = password.trim();

    const user = await User.findOne({ email });
    if (!user || !user.passwordHash) {
      
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    return res.json({
      message: "Logged in",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (e) {
    console.error("Login error:", e);
    return res.status(500).json({ message: "Server error" });
  }
};
