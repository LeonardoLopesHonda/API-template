const db = require("./db");

const User = db.database.define('users', {
    nome: {
        type: db.Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: db.Sequelize.DataTypes.STRING,
        allowNull: false
    }
});

User.all = async function () {
    return this.findAll({
        raw: true,
        nest: true
    });
};

module.exports = User;