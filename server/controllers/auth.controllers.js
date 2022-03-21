const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
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

async function postLogout(req, res) {
  return res.status(200).json({status: "ok"});
}

async function getCompany(req, res) {
  const token = req.headers["x-access-token"];

  try {
    const decoded = jwt.verify(token, "secret123");
    const email = decoded.email;
    const user = await userModel.findOne({ email: email });

    return res.json({ status: "ok", company: user.company_name });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "invalid token" });
  }
}

module.exports = {
  postRegister: postRegister,
  postLogin: postLogin,
  getCompany: getCompany,
  postLogout: postLogout,
};
