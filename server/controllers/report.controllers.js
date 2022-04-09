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
    const companyId = req.query.companyId;
    let dates = [];
    const data = [];
    // Last 7 days
    const endDate = new Date();
    const startDate = new Date(Date.now() - 604800000);

    // Find tickets from past 7 days
    const allCompanyTickets = await ticketModel
      .find({
        company_id: companyId,
        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
      })
      .sort({ createdAt: 1 });

      console.log(allCompanyTickets)

    // Push them to an array
    allCompanyTickets.forEach((ticket) => {
      dates.push(ticket.createdAt.toLocaleDateString());
    });

    // Count occurences of days in the dates array
    function countOccurrences(arr) {
      return arr.reduce(function (a, b) {
        a[b] = a[b] + 1 || 1;
        return a;
      }, []);
    }

    // Make an object from the data above
    const datesOrdered = countOccurrences(dates);

    // Give the data above keys and push it to a new array
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
