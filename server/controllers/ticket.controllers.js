const ticketModel = require("../models/ticket.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function createTicket(req, res) {
  const token = req.headers["x-access-token"];
  let highestTicketId;
  let currentTicketId;
  const allCompanyTicketIds = [];

  // Was sent valid token in header?
  try {
    const decoded = jwt.verify(token, "secret123");
  } catch (error) {
    res.status(500).json({ status: "Invalid token" });
    return;
  }

  // Does this company exist in the db?
  try {
    await userModel.findById(req.body.companyId);
  } catch (error) {
    res.json({ status: "Provided company ID doesn't exist" });
    return;
  }

  try {
    const companyId = req.body.companyId;

    const allCompanyTickets = await ticketModel.find({ company_id: companyId });
    // Company has 0 tickets created
    if (allCompanyTickets.length === 0) {
      // Create first ticket with ticket_id = 000
      currentTicketId = String(0).padStart(3, "0");
    } else {
      // Company has tickets already
      allCompanyTickets.forEach((ticket) => {
        allCompanyTicketIds.push(parseInt(ticket.ticket_id));
      });

      // Create a new ticket_id that is the companys highest ticket id + 1
      highestTicketId = Math.max(...allCompanyTicketIds);
      highestTicketId++;
      currentTicketId = String(highestTicketId).padStart(3, "0");
    }
  } catch (error) {
    console.log(error);
    return;
  }

  try {
    await ticketModel.create({
      ticket_name: req.body.ticketName,
      ticket_description: req.body.ticketDescription,
      ticket_priority: req.body.ticketPriority,
      company_id: req.body.companyId,
      ticket_id: currentTicketId,
    });

    // Ticket successfully created
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "ko" });
  }
}

async function updateTicket(req, res) {
  const token = req.headers["x-access-token"];

  // Was sent valid token in header?
  try {
    const decoded = jwt.verify(token, "secret123");
  } catch (error) {
    res.status(500).json({ status: "Invalid token" });
    return;
  }

  // Does this company exist in the db?
  try {
    await userModel.findById(req.body.companyId);
  } catch (error) {
    res.json({ status: "Provided company ID doesn't exist" });
    return;
  }

  // Does this ticket exist in the db?
  try {
    const ticketToFind = req.body.ticket_id;
    const ticket = await ticketModel.findOneAndUpdate(
      { _id: ticketToFind },
      { ticket_name: req.body.ticket_name }
    );
    console.log(ticket);
    res.status(200).json({ status: "Ticket updated" });
    return;
  } catch (error) {
    res.status(500).json({ status: "Ticket doesn't exist" });
    return;
  }
}

async function getCompany(req, res) {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await userModel.findOne({ email: email });

    return res.json({
      status: "ok",
      company: user.company_name,
      company_id: user._id,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
}

async function getTickets(req, res) {
  const myTickets = [];
  try {
    const tickets = await ticketModel.find({ company_id: req.body.company_id });
    tickets.forEach((ticket) => {
      myTickets.push(ticket);
    });
    res.status(200).json({ tickets: myTickets });
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
}

module.exports = {
  createTicket: createTicket,
  getCompany: getCompany,
  getTickets: getTickets,
  updateTicket: updateTicket,
};
