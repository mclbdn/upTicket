const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth.controllers");

router.post("/api/register", authControllers.postRegister);
router.post("/api/login", authControllers.postLogin);
router.get("/api/companyname", authControllers.getCompany);
router.get("/api/logout", authControllers.postLogout)

module.exports = router;
