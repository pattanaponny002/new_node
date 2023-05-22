const mongoose = require("mongoose");

const UserNew = new mongoose.Schema({
  username: {
    type: String,
  },

  password: {
    type: String,
  },
  email: {
    type: String,
  },

  phone_number: {
    type: String,
  },
  photoURL: {
    type: String,
  },
});

module.exports = mongoose.model("UserNew", UserNew);
