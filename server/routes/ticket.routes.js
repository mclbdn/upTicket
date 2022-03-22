const express = require("express");
const router = express.Router();
const ticketControllers = require("../controllers/ticket.controllers");

router.post("/tickets/create", ticketControllers.createTicket);

module.exports = router;
