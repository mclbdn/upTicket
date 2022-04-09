const ticketModel = require("../models/ticket.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function getPriorities(req, res) {
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
    let dates = [];
    // Last 7 days
    const endDate = new Date();
    const startDate = new Date(Date.now() - 604800000);

    const allCompanyTickets = await ticketModel.find({
      company_id: companyId,
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });

    allCompanyTickets.forEach((ticket) => {
      dates.push(ticket);
    });

    res.status(200).json({ data: dates });
  } catch (error) {
    console.log(error);
    return;
  }
}

module.exports = {
  getPriorities: getPriorities,
};
