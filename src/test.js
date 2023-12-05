const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sistemadeestoque', 'root', '2315469', {
    host: 'localhost',
    dialect: 'mysql',
});

const User = sequelize.define('User', {
    nome: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(6),
        allowNull: false
    }
});

async function createUsers() {
    let user;

    user = await User.create({
        nome: "Leonardo",
        senha: "654321"
    })

    user = await User.create({
        nome: "Matheus",
        senha: "987654"
    })

    user = await User.create({
        nome: "Rodrigo",
        senha: "123456"
    })
}

sequelize.sync()
    .then(() => {
        return createUsers();
    })
    .catch((error) => {
        console.error('Error creating database and table:', error);
    });