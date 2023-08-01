const User = require("../models/user.model");

module.exports.crearUsuario = (req, res) => {
  const { nombre, posicion, juego1, juego2, juego3 } = req.body;
  User.create({
    "Team Name": nombre,
    "Preferred Position": posicion,
    "juego1": 'Undecided',
    "juego2": 'Undecided',
    "juego3": 'Undecided',
  })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obtenerTodosLosUsuarios = (req, res) => {
  User.find({})
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.obtenerUsuarioEspecifico = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.actulizarUsuario = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports.eliminarUsuario = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
