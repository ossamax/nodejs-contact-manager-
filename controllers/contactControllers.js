const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
  const listContacts = await Contact.find();
  res.status(200).json(listContacts);
});

const getContact = asyncHandler(async (req, res) => {
  const listContacts = await Contact.findOne({
    id: req.body.id,
  });
  if (listContacts) {
    res.status(200).json(listContacts);
  } else {
    res.status(400);
    throw new Error("Contact not found");
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
    });
    res.status(200).json(contact);
  }
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `contacts  updated  ${req.params.id} !`,
  });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `contacts was deleted ${req.params.id}!`,
  });
});

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
