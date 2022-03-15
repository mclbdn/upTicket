const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
  console.log(req.body)
});

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(1337);
