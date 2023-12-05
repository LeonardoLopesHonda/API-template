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

// async function createUsers() {
//     let user;

//     user = await User.create({
//         nome: "Leonardo",
//         senha: "654321"
//     })

//     user = await User.create({
//         nome: "Matheus",
//         senha: "987654"
//     })

//     user = await User.create({
//         nome: "Rodrigo",
//         senha: "123456"
//     })
// }

module.exports = User;