const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const infoRoute = require("./routes/info");


const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use("/api", infoRoute);

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// mongodb connection
// connect to mongodb
mongoose.connect('mongodb://suUsuario:suContraseña@localhost:27017/dbLabo?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("Conect"));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

app.listen(port, () => console.log("Server listening to", port));
