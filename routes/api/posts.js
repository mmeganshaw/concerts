// bringing in express
const express = require("express");
// setting router to the Express Router that's been brought in
const router = express.Router();

// sending a json object to the route "/api/posts/test"
router.get("/test", (req, res) => res.json({ msg: "Posts works!" }));

module.exports = router;
