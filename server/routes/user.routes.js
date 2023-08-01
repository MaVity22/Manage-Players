const UserController = require('../controllers/user.controller');

module.exports = function(app) {
    app
    .post("/api/user/new", UserController.crearUsuario)
    .get("/api/user", UserController.obtenerTodosLosUsuarios)
    .get("/api/user/:id", UserController.obtenerUsuarioEspecifico)
    .put("/api/user/:id", UserController.actulizarUsuario)
    .delete("/api/user/:id", UserController.eliminarUsuario)
}