const router = require("express").Router();
const servicios = require("../services/detalles-factura-services");

// Obtener detalles de factura
router.get("/detalles-factura", servicios.obtenerDetallesFactura);

module.exports = router;