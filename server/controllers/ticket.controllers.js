const ticketModel = require("../models/ticket.model");

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

module.exports = {
  createTicket: createTicket,
};
