// server.js
const http = require("http");
const app = require("./app");

// Demonstrating raw HTTP module
const server = http.createServer((req, res) => {
  console.log(`HTTP Module Captured: ${req.method} ${req.url}`);

  // Express handles the rest
  app(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
