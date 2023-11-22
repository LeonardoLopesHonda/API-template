"use strict";

const app = require("express")();
const port = process.env.PORT || 8084;
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
  // Template Engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }));
    app.set('view engine', 'handlebars');

  // Database Connection
    const database = new Sequelize('sistemadeestoque', 'root', '2315469', {
      host: "localhost",
      dialect: 'mysql'
    });

  // Routes
    app.get("/", (req, res) => {
      res.send({ message: "Up" });
    });

    app.get("/registerForm", (req, res) => {
      res.render('form');
    });

    app.post("/registerUser", (req, res) => {
      res.send('Sucessfully Registered');
    });

app.listen(port, () => {
  console.log(`Servidor Rodando na url: http://localhost:${port}`);
});
