const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please add the contact"],
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "Please add the contact"],
  },
  email: {
    type: String,
    required: [true, "Please add the email"],
  },
  phone: {
    type: String,
    required: [true, "Please add the phone"],
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);
