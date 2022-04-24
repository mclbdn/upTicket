import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export async function register(req: Request, res: Response): Promise<void> {
  // Form data
  const companyName = req.body.companyName;
  const email = req.body.email;
  const password = req.body.password;

  if (!companyName || !email || !password) {
    res.status(400).json({ message: "Missing either companyName or email or password. User was not registered." });
    return;
  }

  const newUser = {
    companyName: req.body.companyName,
    email: req.body.email,
    hashedPassword: await bcrypt.hash(req.body.password, 10),
  };

  try {
    await User.create(newUser);

    // User successfully registered
    res.status(200).json({ message: "User was successfully registered." });
    return;
  } catch (err) {
    console.log(err);

    res.status(400).json({ message: "Duplicate email. User was not registered." });
    return;
  }
}

export async function login(req: Request, res: Response): Promise<void> {
  // Form data
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).json({ message: "Login not successful. Provide email & password." });
    return;
  }

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    res.status(404).json({ mesage: "This user was not found." });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

  if (isPasswordValid) {
    const token = jwt.sign({ companyName: user.companyName, email, companyId: user._id }, "secret123", { expiresIn: "1d" });

    res.status(200).json({ message: "User was successfully logged in.", token });
    return;
  } else {
    res.status(401).json({ message: "Password not correct" });
    return;
  }
}

export async function logout(req: Request, res: Response): Promise<void> {
  const token = req.headers["x-access-token"] as string;

  // Was any token sent?
  if (!token) {
    res.status(404).json({ message: "x-access-token not provided." });
    return;
  }

  // Was a valid token sent in the header?
  try {
    jwt.verify(token, "secret123");
    res.status(200).json({ message: "User was successfully logged out." });
    return;
  } catch (err) {
    res.status(404).json({ message: "Invalid token provided." });
    return;
  }
}
