const mongoose = require("mongoose");

const TicketSchema = mongoose.Schema(
  {
    ticket_name: {
      type: String,
      required: true,
    },
    ticket_description: {
      type: String,
      required: true,
    },
    ticket_priority: {
      type: String,
      required: true,
    },
    company_id: {
      type: String,
      required: true,
    },
    ticket_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "tickets" }
);

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
