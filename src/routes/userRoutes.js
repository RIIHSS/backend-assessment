const express = require("express");
const router = express.Router();

// Sample data (usually exists in the starter repo)
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" }
];

// GET all users
router.get("/", (req, res) => {
  res.json(users);
});

// Task 3: Implement GET /api/users/:id
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = router;