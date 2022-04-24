import express from "express";
import { createTicket, deleteTicket, fetchTickets, getCompany, updateTicket } from "../controllers/ticket.controllers";

const router = express.Router();

router.post("/api/ticket/create", createTicket);
router.put("/api/ticket/update", updateTicket);
router.delete("/api/ticket/delete", deleteTicket);
router.get("/api/ticket/fetchTickets", fetchTickets);
router.get("/api/ticket/companyDetails", getCompany);

export default router;
