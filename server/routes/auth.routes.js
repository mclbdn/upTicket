const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controllers");

router.post("/api/register", authControllers.postRegister);

module.exports = router;
