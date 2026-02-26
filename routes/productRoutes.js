const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const PRODUCTS_FILE = "./data/products.json";

// GET ALL PRODUCTS (Render UI)
router.get("/", (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf8"));
    res.render("products", { products });
  } catch (err) {
    res.status(500).send("Error loading products");
  }
});

// GET PRODUCT BY ID (Still JSON for API demo)
router.get("/:id", (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(PRODUCTS_FILE, "utf8"));
    const product = products.find((p) => p.id === req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    const buffer = Buffer.from(product.description);
    product.encodedDescription = buffer.toString("base64");

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to read products" });
  }
});

// STREAM IMAGE
router.get("/image/:name", (req, res) => {
  const imagePath = path.join(__dirname, "../public/images", req.params.name);

  const stream = fs.createReadStream(imagePath);

  stream.on("error", () => {
    res.status(404).send("Image not found");
  });

  stream.pipe(res);
});

module.exports = router;
