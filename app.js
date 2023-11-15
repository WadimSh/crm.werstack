const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.get("/cover", (req, res) => {
  res.sendFile(__dirname + "/cover.html");
});

app.listen(PORT);