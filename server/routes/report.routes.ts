import express from "express";
import { getNumberOfTicketsFromLast7Days } from "../controllers/report.controllers";

const router = express.Router();

router.get("/api/reports/last7daysTickets", getNumberOfTicketsFromLast7Days);

export default router;
