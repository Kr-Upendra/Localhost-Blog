const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "App running successfully!",
  });
});

module.exports = app;
