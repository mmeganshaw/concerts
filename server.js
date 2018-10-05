const express = require("express");
const mongoose = require("mongoose");

// initializing app as express
const app = express();

// bringing in the mongo URI
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// initial test route
app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
