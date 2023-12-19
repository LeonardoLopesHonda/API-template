"use strict";

const app = require("express")();
const port = process.env.PORT || 8084;

const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const User = require("../models/User");
const Product = require("../models/Product");

// Config

// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// Home
app.get("/", (req, res) => {
  res.render("home");
});

// Form
app.get("/registerForm", (req, res) => {
  res.render('form');
});

// Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.all();
    res.render('users', { users: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
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

app.post("/registerUser", (req, res) => {
  User.create({
    nome: req.body.nome,
    senha: req.body.senha
  }).then(() => {
    res.redirect("/users");
  }).catch((error) => {
    res.send(`User could not be created! Error: ${error}`);
  })
});

// Products
app.get("/products", async (req, res) => {
  try {
    const PRODUCT_DATA = await Product.all();
    res.render('products', { products: PRODUCT_DATA });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/registerProductForm", (req, res) => {
  res.render('productsForm');
});

app.post("/registerProducts", (req, res) => {
  Product.create({
    nome: req.body.nome,
    preco: req.body.preco,
    quantidade: req.body.quantidade
  }).then(() => {
    res.redirect("/products");
  }).catch((error) => {
    res.send(`Product could not be registered! Error: ${error}`);
  })
});

app.get("/delete/:id", (req, res) => {
  Product.destroy({ where: { 'id': req.params.id } })
    .then(() => {
      res.render("layouts/delete");
    })
    .catch((error) => {
      res.send(`Cannot delete Product. ERROR: ${error}`);
    })
})

app.listen(port, () => {
  console.log(`Servidor Rodando na url: http://localhost:${port}`);
});
