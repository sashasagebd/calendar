require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const eventRoutes = require("./routes/events");
app.use("/api/events", eventRoutes);

app.get('/', (req, res) => {
    res.send('API is running!');
  });  

module.exports = app;