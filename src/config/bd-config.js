const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'base_factura',
  port: '3307'
});

conexion.connect((error) => {
  if(error) {
    console.log(error);
  }
  console.log("Conexion a base de datos.");
});

module.exports = conexion;