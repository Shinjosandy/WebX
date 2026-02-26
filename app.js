const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

// ✅ Set View Engine FIRST
app.set("view engine", "ejs");
app.use(express.static("public"));

// ✅ Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Needed for form data
app.use(bodyParser.json());

app.use(
  session({
    secret: "ecommerce-secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 },
  }),
);

// Logging middleware
app.use((req, res, next) => {
  console.log("Session ID:", req.sessionID);
  next();
});

// ✅ Render Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

module.exports = app;
