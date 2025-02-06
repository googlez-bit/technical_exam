const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/main-route");
const db = require("./models/db").default;
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}));
app.use(express.json());
app.use("/api", userRoutes);
app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});