const router = require('express').Router();
const servicios = require('../services/factura-services');

// Obtener facturas
router.get('/facturas',  servicios.obtenerFacturas);

module.exports = router;