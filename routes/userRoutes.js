const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { readFileAsync, writeFileAsync } = require("../utils/fileHelper");

const router = express.Router();
const USERS_FILE = "./data/users.json";

// SHOW REGISTER PAGE
router.get("/register", (req, res) => {
  res.render("register");
});

// HANDLE REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const users = await readFileAsync(USERS_FILE);

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.send(
      "User already exists. <a href='/users/register'>Try again</a>",
    );
  }

  const newUser = { id: uuidv4(), name, email, password };
  users.push(newUser);

  await writeFileAsync(USERS_FILE, users);

  res.redirect("/users/login");
});

// SHOW LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("login");
});

// HANDLE LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const users = await readFileAsync(USERS_FILE);

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.send(
      "Invalid credentials. <a href='/users/login'>Try again</a>",
    );
  }

  req.session.user = user;

  if (!req.session.cart) {
    req.session.cart = [];
  }

  res.redirect("/products");
});

// LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

module.exports = router;
