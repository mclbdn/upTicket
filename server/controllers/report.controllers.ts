import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import Ticket from "../models/ticket.model";
import User from "../models/user.model";

export async function getNumberOfTicketsFromLast7Days(req: Request, res: Response) {
  const token = req.headers["x-access-token"] as string;
  const companyId = req.query.companyId;
  const dates: string[] = [];
  const data = [];
  
  if (!companyId) {
    res.status(400).json({ message: "Error. Provide companyId." });
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
    User.findById(companyId);
  } catch (err) {
    console.log(err);

    res.status(404).json({ message: "Provided company ID doesn't exist." });
    return;
  }

  try {
    // Last 7 days dates
    // Today
    const endDate = new Date();
    // 7 days ago
    const startDate = new Date(Date.now() - 604800000);

    // Find tickets from last 7 days
    const allCompanyTickets = await Ticket.find({ compandyId: companyId, createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) } }).sort({
      createdAt: 1,
    });

    console.log(allCompanyTickets);

    // Push each date to an array
    if (!allCompanyTickets) {
      throw new Error("This company has no tickets.");
    } else {
      allCompanyTickets.forEach((ticket) => {
        dates.push(ticket.createdAt.toLocaleDateString());
      });
    }

    // Count occurences of days in the dates array
    function countOccurences(arr: string[]) {
      return arr.reduce((a: any, b: any) => {
        a[b] = a[b] + 1 || 1;
        return a;
      }, []);
    }

    const datesOrdered = countOccurences(dates);

    // Give the data above keys and push it to a new array
    for (const key in datesOrdered) {
      if (datesOrdered.hasOwnProperty(key)) {
        const tempObj = { date: key, numOfTickets: datesOrdered[key] };
        data.push(tempObj);
      }
    }

    res.status(200).json({ datesUsed: { startDate, endDate }, data });
    return;
  } catch (err) {
    console.log(err);

    res.status(500).json({ message: "Error. Report not generated" });
    return;
  }
}
