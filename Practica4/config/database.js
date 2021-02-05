const Sequelize = require('sequelize');

// Parámetros de conexión a MySQL
const DB_NAME = 'nodebasicpractice';
const DB_USER = 'root';
const DB_PASSWORD = '';
const DB_DIALECT = 'mysql';
const DB_HOST = 'localhost';

// Generación de URI (Uniform Resource Identifier)
const URI = `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

//Exportación del módulo (common.js)
module.exports = new Sequelize(URI);