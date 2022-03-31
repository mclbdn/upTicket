const express = require("express");
const router = express.Router();
const ticketControllers = require("../controllers/ticket.controllers");

router.post("/tickets/create", ticketControllers.createTicket);
router.put("/tickets/update", ticketControllers.updateTicket);
router.post("/tickets/delete", ticketControllers.deleteTicket);
router.get("/tickets/gettickets", ticketControllers.getCompany);
router.post("/tickets/all", ticketControllers.getTickets);

module.exports = router;
