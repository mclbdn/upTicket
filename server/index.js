const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.routes");

// Connect to the db
mongoose.connect(
  "mongodb+srv://mclbdn:Miminitos1.@cluster0.zgee6.mongodb.net/upticket-users"
);

app.use(cors());
app.use(express.json());

// Use auth routes
app.use(authRoutes);

app.listen(1337);
