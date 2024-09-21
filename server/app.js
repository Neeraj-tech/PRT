const express = require("express");
const cors = require("cors");

const appRouter = require("./routes/authRoute.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", appRouter);

module.exports = app;
