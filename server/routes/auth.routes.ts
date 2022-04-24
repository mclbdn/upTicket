import express from "express";
import { register, login, logout } from "../controllers/auth.controllers";

const router = express.Router();

router.post("/api/user/register", register);
router.post("/api/user/login", login);
router.post("/api/user/logout", logout);

export default router;
