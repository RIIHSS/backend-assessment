require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

// TODO: Import routes
// const userRoutes = require("./routes/userRoutes");

// TODO: Use routes
// app.use("/api/users", userRoutes);

// Existing Route
app.get("/", (req, res) => {
  res.send("🚀 API Launchpad is running...");
});

// TODO: Create a new route
// Route: GET /api/status
// Response:
// {
//   status: "success",
//   message: "API is live and working"
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
