const getAllContacts = (req, res) => {
  res.status(200).json({
    message: "contacts list  found !",
  });
};

const getContact = (req, res) => {
  res.status(200).json({
    message: `contacts  found  ${req.params.id} !`,
  });
};

const createContact = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required !");
  }

  res.status(200).json({
    message: `contacts  created  ${req.body} !`,
  });
};

const updateContact = (req, res) => {
  res.status(200).json({
    message: `contacts  updated  ${req.params.id} !`,
  });
};

const deleteContact = (req, res) => {
  res.status(200).json({
    message: `contacts was deleted ${req.params.id}!`,
  });
};

module.exports = {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
