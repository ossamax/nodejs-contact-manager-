const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
  const listContacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json(listContacts);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findOne({
    _id: req.params.id,
  });

  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
  } else {
    res.status(200).json(contact);
  }
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required !");
  } else {
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    });
    res.status(200).json(contact);
  }
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You dont have permission to update this !");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    res.status(404).json({ message: "Contact not found" });
    return;
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(401);
    throw new Error("You dont have permission to update this !");
  }
  await Contact.deleteOne({
    _id: req.params.id,
  });
  res.status(200).json({ message: "Contact deleted successfully" });
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
