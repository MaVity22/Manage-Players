const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  "Team Name": {
    type: String,
    required: [true, "Es Obligatorio ingresar un nombre"],
  },
  "Preferred Position": {
    type: String,
    required: [true, "Es obligatorio ingresar una posición"],
  },
  "juego1": {
    type: String,
    required: [true, "Es obligatorio ingresar una posición"],
  },
  "juego2": {
    type: String,
    required: [true, "Es obligatorio ingresar una posición"],
  },
  "juego3": {
    type: String,
    required: [true, "Es obligatorio ingresar una posición"],
  },
});

const User = mongoose.model("User", UserSchema, "personas");
module.exports = User;
