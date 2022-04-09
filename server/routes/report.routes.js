const express = require("express");
const router = express.Router();
const reportControllers = require("../controllers/report.controllers");

router.get("/api/last7daystickets", reportControllers.getNumberOfTicketsFromLast7Days);

module.exports = router;
