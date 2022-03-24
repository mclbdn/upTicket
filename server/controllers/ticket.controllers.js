const ticketModel = require("../models/ticket.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function createTicket(req, res) {
  try {
    await ticketModel.create({
      ticket_name: req.body.ticketName,
      ticket_description: req.body.ticketDescription,
      ticket_priority: req.body.ticketPriority,
      company_id: req.body.companyId,
    });

    // Ticket successfully created
    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.status(500);
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
    tickets.forEach((ticket)=>{
      myTickets.push(ticket)
    })
    res.status(200).json({ tickets: myTickets });
    console.log(myTickets)
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
}

module.exports = {
  createTicket: createTicket,
  getCompany: getCompany,
  getTickets: getTickets,
};
