const conexion = require("../config/bd-config");

exports.obtenerDetallesFactura = (req, res) => {
  const query = "SELECT * FROM detalle_factura";

  conexion.query(query, (error, result) => {
    if(error) {
      console.log("Error");
    } else {
      res.json(result);
    }
  });
}