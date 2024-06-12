const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

// Configuraciones
app.set('puerto', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// Rutas
app.use(require('./routes/factura-routes'));

// Iniciar servidor
app.listen(app.get('puerto'), () => {
  console.log("Servidor en puerto:", app.get('puerto'));
});