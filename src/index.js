const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes"); // Task 5

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Base Route
app.get("/", (req, res) => {
  res.send(`Welcome to ${process.env.APP_NAME}`);
});

// Task 4: Add New Feature
app.get("/api/status", (req, res) => {
  res.json({
    status: "success",
    message: "API is live and working",
  });
});

// Task 5: Connect Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});