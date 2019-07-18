const express = require("express");
const bodyParser = require("body-parser");

//Instanciamos express como servidor para empezar a utilizar su potencia
const app = express();
//Uso de Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Funciones que responden a los métodos GET POST PUT DELETE
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(3500, () => {
  console.log("El servidor está corriendo por el puerto 3500");
});
