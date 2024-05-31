const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://lupeoriol:mathilupe2024@cluster0.7hyw3uj.mongodb.net/";

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Conectando a la base de datos ${name} DB en el host ${host}`);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error);
  }
};

module.exports = { connect };
