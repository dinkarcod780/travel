const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/trevel");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  number: Number
});

module.exports = mongoose.model("user",userSchema);