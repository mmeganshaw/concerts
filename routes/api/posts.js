// bringing in express
const express = require("express");

// defining router
const router = express.Router();

// declaring the test route
router.get("/test", (req, res) => res.json({ msg: "This sucks man" }));

// exporting router to use in server.js
module.exports = router;
