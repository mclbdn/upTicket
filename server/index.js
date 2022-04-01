const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes");
const ticketRoutes = require("./routes/ticket.routes");
require("dotenv").config();

// Connect to the db
mongoose.connect(process.env.MONGO_DB_URL);

app.use(cors());
app.use(express.json());

// Use auth routes
app.use(authRoutes);

// Use ticket routes
app.use(ticketRoutes);

app.listen(process.env.PORT || 1337, () => {
  console.log("Server is running");
});
