const express = require("express");
const fs = require("fs");

const router = express.Router();
const PRODUCTS_FILE = "./data/products.json";

// ADD TO CART
router.get("/add/:id", (req, res) => {
  if (!req.session.user) return res.redirect("/users/login");

  const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf8"));
  const product = products.find((p) => p.id === req.params.id);

  if (!product) return res.send("Product not found");

  if (!req.session.cart) {
    req.session.cart = [];
  }

  req.session.cart.push(product);

  res.redirect("/cart");
});

// VIEW CART (Render UI)
router.get("/", (req, res) => {
  const cart = req.session.cart || [];
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  res.render("cart", { cart, total });
});

// REMOVE FROM CART
router.get("/remove/:id", (req, res) => {
  if (!req.session.cart) return res.redirect("/cart");

  req.session.cart = req.session.cart.filter((p) => p.id !== req.params.id);

  res.redirect("/cart");
});

module.exports = router;
