const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
import { Request, Response } from "express";
import { middlewares } from "./middlewares/user";
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const authRoutes = require('./routes/authRoutes.ts');
const userRoutes = require('./routes/userRoutes');
const budgetRoutes = require('./routes/budgetRoutes');


app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.use("/auth", authRoutes);
app.use("/profile", middlewares.validateUser, userRoutes);
app.use("/budgets", middlewares.validateUser, budgetRoutes);

app.get("*", (_: Request, res: Response) => {
  return res.status(404).send("Not found");
});
app.post("*",  (_: Request, res: Response) => {
  return res.status(404).send("Not found");
});
// app.use((err: Error, _: Request, res: Response) => {
//   console.error(err.stack);
//   return res.status(500).send("Something went wrong!");
// });
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/CRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.K_DB || "dev-lauvote", // specify the database name here
  })
  .then(() => console.log("connected to mongodb"))
  .catch(() => console.log("error occured connecting to mongodb"));

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on port 3001");
});