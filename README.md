# Rest API Node JS

Rest API en Node JS para gestionar facturas y detalles de factura.

## Instalación:
1. git clone https://github.com/brb2024/back-node-js.git
2. npm i

## Base de datos:
- Tener una base de datos llamada base_factura con las siguientes tablas:

```sql
CREATE TABLE factura (
  id_factura int(11) NOT NULL AUTO_INCREMENT,
  fecha date NOT NULL,
  cliente varchar(100) NOT NULL,
  total decimal(10,2) NOT NULL,
  PRIMARY KEY(id_factura)
);

CREATE TABLE detalle_factura (
  id_detalle int(11) NOT NULL AUTO_INCREMENT,
  id_factura int(11) NOT NULL,
  producto varchar(100) NOT NULL,
  cantidad int(11) NOT NULL,
  precio_unitario decimal(10,2) NOT NULL,
  subtotal decimal(10,2) NOT NULL,
  PRIMARY KEY(id_detalle),
  FOREIGN KEY(id_factura) REFERENCES factura(id_factura)
);
```
