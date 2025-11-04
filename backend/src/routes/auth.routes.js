import { Router } from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { auth } from "../middleware/auth.js";
import User from "../models/User.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.userId).select("name email");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user });
});

export default router;
