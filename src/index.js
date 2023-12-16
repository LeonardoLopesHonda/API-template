"use strict";

const app = require("express")();
const port = process.env.PORT || 8084;

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const User = require("../models/User");

// Config

// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", async (req, res) => {
  try {
    const users = await User.all();
    res.render('home', { users: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/registerForm", (req, res) => {
  res.render('form');
});

app.post("/registerUser", (req, res) => {
  User.create({
    nome: req.body.nome,
    senha: req.body.senha
  }).then(() => {
    res.redirect("/");
  }).catch((error) => {
    res.send(`User could not be created! Error: ${error}`);
  })
});

app.get("/delete/:id", (req, res) => {
  // DELETE FROM users WHERE 'id' = id
  User.destroy({ where: { 'id': req.params.id } })
    .then(() => {
      res.render("layouts/delete");
    })
    .catch((error) => {
      res.send(`Cannot delete user. ERROR: ${error}`);
    })
})

app.listen(port, () => {
  console.log(`Servidor Rodando na url: http://localhost:${port}`);
});
