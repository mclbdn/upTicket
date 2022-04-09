const ticketModel = require("../models/ticket.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function getNumberOfTicketsFromLast7Days(req, res) {
  const token = req.headers["x-access-token"];

  // Was sent valid token in header?
  try {
    jwt.verify(token, "secret123");
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Invalid token" });
    return;
  }

  // Does this company exist in the db?
  try {
    await userModel.findById(req.body.companyId);
  } catch (error) {
    console.log(error);
    res.json({ status: "Provided company ID doesn't exist" });
  }

  try {
    const companyId = req.body.companyId;
    // Last 7 days
    const endDate = new Date();
    const startDate = new Date(Date.now() - 604800000);
    let dates = [];
    const data = [];

    const allCompanyTickets = await ticketModel.find({
      company_id: companyId,
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });

    allCompanyTickets.forEach((ticket) => {
      dates.push(ticket.createdAt.toLocaleDateString());
    });

    function countOccurrences(arr) {
      return arr.reduce(function (a, b) {
        a[b] = a[b] + 1 || 1;
        return a;
      }, []);
    }

    const datesOrdered = countOccurrences(dates);

    for (let key in datesOrdered) {
      const tempObj = { date: key, numOfTickets: datesOrdered[key] };
      data.push(tempObj);
    }

    res.status(200).json({ datesUsed: { startDate, endDate }, data: data });
  } catch (error) {
    console.log(error);
    return;
  }
}

module.exports = {
  getNumberOfTicketsFromLast7Days: getNumberOfTicketsFromLast7Days,
};
