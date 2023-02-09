const express = require("express");

const allProduct = require("./allProduct.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let products = await allProduct.find();
    return res.send(products);
  } catch (error) {
    return res.send(404);
  }
});
module.exports = app;
