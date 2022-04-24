import { model, Schema, Model, Document } from "mongoose";

interface ITicket extends Document {
  ticketName: string;
  ticketDescription: string;
  ticketPriority: string;
  compandyId: string;
  ticketId: string;
  createdAt: Date;
}

const TicketSchema = new Schema<ITicket>(
  {
    ticketName: {
      type: String,
      required: true,
    },
    ticketDescription: {
      type: String,
      required: true,
    },
    ticketPriority: {
      type: String,
      required: true,
    },
    compandyId: {
      type: String,
      required: true,
    },
    ticketId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, collection: "tickets" }
);

const Ticket: Model<ITicket> = model("Ticket", TicketSchema);

export default Ticket;
