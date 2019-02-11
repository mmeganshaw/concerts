const express = require("express");
const router = express.Router();

// encryping password
const bcrypt = require("bcryptjs");

// bringing in gravatar
const gravatar = require("gravatar");

// requiring the User model for posting new user registration
const User = require("../../models/User");

// @router GET request to api/users/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @router Post request to api/users/register
// @desc Posting a new user to the database
// @access Public

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "r", // rating
        d: "mm:" // default
        // thanks for making it this far :)
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      // generate a salt for our password
      bcrypt.genSalt(10, (err, salt) => {
        // hash the password
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          // if there's an error, give it back
          if (err) throw err;
          // otherwise save the new hashed password to the database
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
