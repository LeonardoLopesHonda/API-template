const db = require("./db");

const Product = db.database.define('products', {
    nome: {
        type: db.Sequelize.DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: db.Sequelize.DataTypes.DOUBLE,
        allowNull: false
    },
    quantidade: {
        type: db.Sequelize.DataTypes.INTEGER,
        allowNull: false
    }
});

Product.all = async function () {
    return this.findAll({
        raw: true,
        nest: true
    });
};

module.exports = Product;