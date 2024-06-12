const conexion = require('../config/bd-config');

exports.obtenerFacturas = (req, res) => {
  const query = "SELECT * FROM factura";

  conexion.query(query, (error, result) => {
    if(error) {
      console.log("Error");
    } else {
      res.json(result);
    }
  });
};