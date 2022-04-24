import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import Ticket from "../models/ticket.model";
import User from "../models/user.model";

export async function createTicket(req: Request, res: Response) {
  const token = req.headers["x-access-token"] as string;
  let highestTicketId: number;
  let currentTicketId = "000";
  const allCompanyTicketIds: number[] = [];
  const companyId = req.body.companyId;
  const ticketName = req.body.ticketName;
  const ticketDescription = req.body.ticketDescription;
  const ticketPriority = req.body.ticketPriority;

  if (!companyId || !ticketName || !ticketDescription || !ticketPriority) {
    res.status(400).json({ message: "Error. Provide companyId & ticketName & ticketDescription & ticketPriority." });
    return;
  }

  // Was any token sent?
  if (!token) {
    res.status(404).json({ message: "Error. x-access-token not provided." });
    return;
  }

  // Was a valid token sent in the header?
  try {
    jwt.verify(token, "secret123");
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Invalid token provided." });
    return;
  }

  // Does this company exist in the db?
  try {
    await User.findById(companyId);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Provided company ID doesn't exist." });
    return;
  }

  try {
    const allCompanyTickets = await Ticket.find({ compandyId: companyId });

    // Assign a new highestTicketId if company already has some tickets
    if (allCompanyTickets.length !== 0) {
      allCompanyTickets.forEach((ticket) => {
        allCompanyTicketIds.push(Number(ticket.ticketId));
      });

      // Create a new ticketId that is the company's highest ticketId + 1
      highestTicketId = Math.max(...allCompanyTicketIds);
      highestTicketId++;
      currentTicketId = String(highestTicketId).padStart(3, "0");
    }
  } catch (err) {
    console.log(err);
    return;
  }

  try {
    await Ticket.create({
      ticketName,
      ticketDescription,
      ticketPriority,
      compandyId: companyId,
      ticketId: currentTicketId,
    });

    // Ticket successfully created
    res.status(200).json({ message: "Ticket successfully created." });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An errror occurred. Ticket not created." });
    return;
  }
}

export async function updateTicket(req: Request, res: Response) {
  const token = req.headers["x-access-token"] as string;
  const companyId = req.body.companyId;
  const ticketId = req.body.ticketId;
  const ticketName = req.body.ticketName;
  const ticketDescription = req.body.ticketDescription;
  const ticketPriority = req.body.ticketPriority;

  if (!companyId || !ticketId || !ticketName || !ticketDescription || !ticketPriority) {
    res.status(400).json({ message: "Error. Provide companyId & ticketId & ticketName & ticketDescription & ticketPriority." });
    return;
  }

  // Was any token sent?
  if (!token) {
    res.status(404).json({ message: "Error. x-access-token not provided." });
    return;
  }

  // Was a valid token sent in the header?
  try {
    jwt.verify(token, "secret123");
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Invalid token provided." });
    return;
  }

  // Does this company exist in the db?
  try {
    await User.findById(companyId);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Provided company ID doesn't exist." });
    return;
  }

  // Does this ticket exist in the db?
  try {
    await Ticket.findOneAndUpdate(
      { _id: ticketId },
      {
        ticketName,
        ticketDescription,
        ticketPriority,
      }
    );

    res.status(200).json({ message: "Ticket successfully updated." });
    return;
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Provided ticket ID doesn't exist." });
    return;
  }
}

export async function deleteTicket(req: Request, res: Response) {
  const token = req.headers["x-access-token"] as string;
  const companyId = req.body.companyId;
  const ticketId = req.body.ticketId;

  if (!companyId || !ticketId) {
    res.status(400).json({ message: "Error. Provide companyId & ticketId." });
    return;
  }

  // Was any token sent?
  if (!token) {
    res.status(404).json({ message: "Error. x-access-token not provided." });
    return;
  }

  // Was a valid token sent in the header?
  try {
    jwt.verify(token, "secret123");
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Invalid token provided." });
    return;
  }

  // Does this company exist in the db?
  try {
    await User.findById(companyId);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Provided company ID doesn't exist." });
    return;
  }

  // Does this ticket exist in the db?
  try {
    const deletedTicket = await Ticket.findByIdAndRemove({ _id: ticketId });

    // For some reason findByIdAndRemove "successfully" finds already deleted IDs(why??) and deletes them again instead
    // of throwing an error because an ID wasn't found, so I do it manually since at least findByIdAndRemove returns
    // null in this case.
    if (deletedTicket) {
      res.status(200).json({ message: "Ticket successfully deleted" });
      return;
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: "Error. Provided Ticket ID doesn't exist." });
    return;
  }
}

export async function getCompany(req: Request, res: Response) {
  const token = req.headers["x-access-token"] as string;

  // Was any token sent?
  if (!token) {
    res.status(404).json({ message: "Error. x-access-token not provided." });
    return;
  }

  // Was a valid token sent in the header?
  try {
    const decodedToken = jwt.verify(token, "secret123") as JwtPayload;
    const email = decodedToken.email;
    const user = await User.findOne({ email });

    res.status(200).json({ companyName: user?.companyName, companyId: user?._id });
    return;
  } catch (err) {
    console.log(err);

    res.status(404).json({ message: "Error. Invalid token provided." });
    return;
  }
}

export async function fetchTickets(req: Request, res: Response) {
  const token = req.headers["x-access-token"] as string;
  const companyId = req.body.companyId;

  if (!companyId) {
    res.status(400).json({ message: "Error. Provide companyId" });
    return;
  }

  // Was any token sent?
  if (!token) {
    res.status(404).json({ message: "Error. x-access-token not provided" });
    return;
  }

  // Was a valid token sent in the header?
  try {
    jwt.verify(token, "secret123");
  } catch (err) {
    console.log(err);

    res.status(404).json({ message: "Error. Invalid token provided." });
  }

  // Does this company exist in the db?
  try {
    await User.findById(companyId);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Error. Provided company ID doesn't exist." });
  }

  try {
    const tickets = await Ticket.find({ compandyId: companyId });

    res.status(200).json({ tickets });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "An error occured." });
  }
}
