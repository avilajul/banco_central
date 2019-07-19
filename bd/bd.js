const mysql = require("mysql");
//Creamos clase
class DB {
  constructor() {
    //Verificar la existencia de alguna instancia en la base de datos
    if (!DB.instancia) {
      DB.instancia = this;
      //Agregamos los parametros de conexión
      this.connection = mysql.createConnection({
        /*         host: "127.0.0.1",
        user: "root",
        password: "ajira316",
        database: "flexcube" */
        host: "10.100.24.255",
        user: "root",
        password: "AGRkla42554",
        database: "flexcube",
        port: "3306"
      });
      //conectamos y  manejamos la conexión con throw
      this.connection.connect(err => {
        if (err) throw err;
        console.log(err);
      });
      console.log("Encontró conexión");
    }
    //si existe la instancia que retorne la misma
    return DB.instancia;
  }
}

//creamos la instancia del objeto
const instancia = new DB();
Object.freeze(instancia);

module.exports = instancia;
