const express = require("express");
const router = express.Router();

// @router GET request to api/profile/test
// @desc Tests profile route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works!" }));

module.exports = router;
