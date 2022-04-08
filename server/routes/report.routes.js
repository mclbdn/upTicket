const express = require("express");
const router = express.Router();
const reportControllers = require("../controllers/report.controllers");

router.get("/api/priorities", reportControllers.getPriorities);

module.exports = router;
