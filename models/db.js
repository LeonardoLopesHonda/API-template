const Sequelize = require('sequelize');

// Database Connection
const database = new Sequelize('sistemadeestoque', 'root', '2315469', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = { Sequelize, database }