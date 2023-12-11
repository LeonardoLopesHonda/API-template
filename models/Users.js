const { database, Sequelize } = require("./db");

const User = database.define('User', {
    nome: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING(6),
        allowNull: false
    }
});

User.all = async function () {
    return this.findAll();
};

module.exports = User;