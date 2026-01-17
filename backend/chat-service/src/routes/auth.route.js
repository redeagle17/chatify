import express from "express";
import { signup, login, logout, updateProfile, sendOtp, verifyOtp } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// router.use(arcjetProtection);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/login-otp", sendOtp);
router.post("/verify-otp", verifyOtp);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default router;