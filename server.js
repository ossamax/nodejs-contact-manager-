const express = require("express");
const router = require("./routes/contact");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use("/api/contacts", require("./routes/contact"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("server working");
});
