const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userControllers");
const ValidateToken = require("../middleware/validateToken");

router.post("/register", registerUser);

router.get("/login", loginUser);

router.get("/current", ValidateToken, currentUser);

module.exports = router;
