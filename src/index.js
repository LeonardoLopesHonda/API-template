"use strict";

const app = require("express")();
const port = process.env.PORT || 8084;

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const User = require("../models/Users")

// Config

// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send({ message: "Up" });
});

app.get("/registerForm", (req, res) => {
  res.render('form');
});

app.post("/registerUser", (req, res) => {
  User.create({
    nome: req.body.nome,
    senha: req.body.senha
  }).then(() => {
    res.send("User sucessfullty created!");
  }).catch((error) => {
    res.send(`User could not be created! Error: ${error}`);
  })
});

app.listen(port, () => {
  console.log(`Servidor Rodando na url: http://localhost:${port}`);
});
