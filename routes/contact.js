const express = require("express");
const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

const router = express.Router();

// Route to get all contacts or create a new contact
router
  .route("/")
  .get(getAllContacts) // Fetch all contacts
  .post(createContact); // Create a new contact

// Route to get, update, or delete a specific contact by ID
router
  .route("/:id")
  .get(getContact) // Fetch a contact by ID
  .put(updateContact) // Update a contact by ID
  .delete(deleteContact); // Delete a contact by ID

module.exports = router;
