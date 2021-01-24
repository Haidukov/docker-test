const express = require("express");
const mongoose = require("mongoose");
const { port, host, db, authApiUrl } = require("./configuration");
const { connectDb } = require("./helpers/db");
const axios = require('axios');

const app = express();
const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model("Kitten", kittySchema);

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

app.get('/testapidata', (req, res) => {
  res.json({
    status: true
  });
});

app.get('/test2', async (req, res) => {
  const { data } = await axios.get(`${authApiUrl}/currentUser`);
  res.json(data);
});

const startServer = () => {
  app.listen(port, () => {
    console.log(`Started api service on port ${port}`);
    console.log(`Our host is ${host}`);
    console.log(`Database url ${db}`);

    const silence = new Kitten({ name: "Silence" });
    silence.save(function (err, result) {
      if (err) return console.error(err);
      console.log("result with volumes", result);
    });
  });
};

connectDb()
  .on("error", console.log)
  .on("disconnected", connectDb)
  .once("open", startServer);