import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly, super_adminOnly } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected routes
router.get("/me", protect, getMe);

// Admin routes
router.get("/", protect, adminOnly, getAllUsers);
router.post("/", protect, super_adminOnly, createUser);
router.put("/:id", protect, updateUser);
router.delete("/:id", protect, super_adminOnly, deleteUser);

export default router;
