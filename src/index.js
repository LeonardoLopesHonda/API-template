"use strict";

const app = require("express")();
const port = process.env.PORT || 8081;

app.get("/", (req, res) => {
  res.send({ message: "Up" });
});

app.listen(port, () => {
  console.log(`Servidor Rodando na url: http://localhost:${port}`);
});
