const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow React frontend to access API

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 45 },
];

// GET route
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
