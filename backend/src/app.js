const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.set("port", 8000);

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

module.exports = app;
