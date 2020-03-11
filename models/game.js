const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Game = new Schema({
  Name: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Book;
