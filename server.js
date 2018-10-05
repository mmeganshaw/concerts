const express = require("express");

// initializing app as express
const app = express();

// initial test route
app.get("/", (req, res) => res.send("Hello World"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
