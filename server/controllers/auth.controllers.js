const userModel = require("../models/user.model");

// Register POST

async function postRegister(req, res) {
  console.log(req.body);

  try {
    await userModel.create({
      company_name: req.body.companyName,
      company_email: req.body.companyEmail,
      password: req.body.password,
    });
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "ko", message: "Duplicate email." });
  }
}

module.exports = {
  postRegister: postRegister,
};
