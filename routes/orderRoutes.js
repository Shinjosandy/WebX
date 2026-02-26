const express = require("express");
const { readFileAsync, writeFileAsync } = require("../utils/fileHelper");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const ORDERS_FILE = "./data/orders.json";

router.post("/place", async (req, res) => {
  if (!req.session.user || !req.session.cart.length)
    return res.status(400).json({ message: "Cart empty or not logged in" });

  const orders = await readFileAsync(ORDERS_FILE);

  const order = {
    id: uuidv4(),
    userId: req.session.user.id,
    items: req.session.cart,
    total: req.session.cart.reduce((sum, i) => sum + i.price, 0),
  };

  orders.push(order);
  await writeFileAsync(ORDERS_FILE, orders);

  req.session.cart = [];

  res.json({ message: "Order placed", order });
});

router.get("/history", async (req, res) => {
  if (!req.session.user)
    return res.status(401).json({ message: "Login required" });

  const orders = await readFileAsync(ORDERS_FILE);
  const userOrders = orders.filter((o) => o.userId === req.session.user.id);

  res.json(userOrders);
});

module.exports = router;
