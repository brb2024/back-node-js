const router = require('express').Router();
const consultas = require('../services/factura-services');

// Obtener facturas
router.get('/facturas',  consultas.obtenerPersonas);

module.exports = router;