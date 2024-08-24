const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userControllers");

router.post("/register", registerUser);

router.get("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
