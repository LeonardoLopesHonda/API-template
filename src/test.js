const Sequelize = require('sequelize');
const database = new Sequelize('sistemadeestoque', 'root', '2315469', {
    host: "localhost",
    dialect: 'mysql'
});

const Usuarios = database.define('usuarios', {
    nome: {
        type: Sequelize.STRING(20)
    },
    senha: {
        type: Sequelize.STRING(6)
    }
});

// {
//     nome: "Matheus",
//     senha: "987654"
// },
//  {
//     nome: "Rodrigo",
//     senha: "123456"
// },
// Usuarios.create({    
//     nome: "Leonardo",
//     senha: "654321"
// })

// Usuarios.sync({force: true});