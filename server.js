const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// Route setup
app.use("/api/contacts", require("./routes/contact"));
app.use("/api/users", require("./routes/user"));

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server working on port ${port}`);
});
