const fs = require("fs");

const readFileAsync = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(JSON.parse(data || "[]"));
    });
  });
};

const writeFileAsync = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

module.exports = { readFileAsync, writeFileAsync };
