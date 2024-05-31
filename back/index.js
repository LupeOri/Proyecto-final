const express = require("express");
const { connect } = require("./src/utils/db");

const PORT = 3000;

const app = express();
connect();

app.use("/", (req, res) => {
  res.json("Esto es el home");
});

app.listen(PORT, () =>
  console.log(`Escuchando en el puerto http://localhost:${PORT}`)
);
