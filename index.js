const express = require("express");
var cors = require("cors");
const connectToDb = require("./db/connectToDb");

const app = express();
require("dotenv").config();

const userRoutes = require("./routes/user.route");
/**
 * 1. [routes path added here]
 * 2. [Parse JSON request body]
 * 3. [parse urlencoded request body]
 * 4. [routing add here]
 */

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoutes);

/**
 * [mongodb connection]
 * [app listening PORT comes from .env]
 */

connectToDb();

app.listen(process.env.PORT, () =>
  console.log(`Server Started at PORT ${process.env.PORT}`)
);
