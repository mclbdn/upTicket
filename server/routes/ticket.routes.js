const express = require("express");
const router = express.Router();
const ticketControllers = require("../controllers/ticket.controllers");

router.post("/tickets/create", ticketControllers.createTicket);
router.get("/tickets/gettickets", ticketControllers.getCompany);
router.post("/tickets/all", ticketControllers.getTickets);

module.exports = router;
