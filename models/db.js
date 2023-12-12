const Sequelize = require('sequelize');

const database = new Sequelize('sistemadeestoque', 'root', '2315469', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = { Sequelize: Sequelize, database: database }