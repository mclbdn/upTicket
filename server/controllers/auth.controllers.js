const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register POST

async function postRegister(req, res) {
  console.log(req.body);

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await userModel.create({
      company_name: req.body.companyName,
      email: req.body.email,
      password: hashedPassword,
    });

    // User sucessfully registered
    return res.status(200).json({ status: "ok" });
  } catch (error) {
    // User not registered
    console.log(error);
    return res.status(401).json({ status: "ko", message: "Duplicate email." });
  }
}

async function postLogin(req, res) {
  // Does this user exist?
  const user = await userModel.findOne({ email: req.body.email });
  console.log(user);

  if (!user) {
    res.json({ status: "ko", message: "Non-existing user" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );
  console.log(isPasswordValid);

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.company_name,
        email: user.email,
      },
      "secret123",
      { expiresIn: "1d" }
    );

    return res.status(200).json({ status: "ok", user: token });
  } else {
    return res.status(401).json({ status: "ko", user: false });
  }
}

async function getLogout(req, res) {
  return res.status(200).json({ status: "ok" });
}

module.exports = {
  postRegister: postRegister,
  postLogin: postLogin,
  getLogout: getLogout,
};
