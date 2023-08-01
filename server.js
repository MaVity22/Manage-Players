const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

//Config es la conexion con la base 
require("./server/config/mongoose.config");

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }));

const todasLasRutas = require("./server/routes/user.routes");
todasLasRutas(app);

app.listen(port, () => {
  console.clear();
  console.log("El servidor esta escuchando en el puerto: ", port);
});
