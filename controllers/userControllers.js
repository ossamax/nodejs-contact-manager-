const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("All fields are required !");
  }
  const findUser = await UserModel.findOne({ email });
  if (findUser) {
    res.status(400);
    throw new Error(`User already exist with email ${req.body.email}!`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });
  res.status(201).json({
    message: "User registered successfully",
    token: jwt.sign(
      { id: user._id, email: user.email }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "12h" } // Token expiration (1 hour)
    ),
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required !");
  } else {
    const user = await UserModel.findOne({
      email,
    });
    if (!user) {
      res.status(400);
      throw new Error("User not found ,  try again !");
    }
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        message: "User loged in successfully",
        token: jwt.sign(
          { id: user._id, email: user.email }, // Payload
          process.env.JWT_SECRET, // Secret key
          { expiresIn: "12h" } // Token expiration (1 hour)
        ),
      });
    } else {
      res.status(400);
      throw new Error("Wrong password , try again !");
    }
  }
});

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
