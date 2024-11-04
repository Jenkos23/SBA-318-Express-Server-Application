const express = require('express');
const router = express.Router();

let usersForm= [];


router
  .route("/user")
  .get((req, res) => {
    res.render("form"); // Render the Pug view for the form
  })
  .post((req, res) => {
    const { username, email } = req.body;

    // Validate input
    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required." });
    }

    // Create a new user object
    const newUser = { username, email };
    usersForm.push(newUser); // Store the new user
    res.status(201).json(newUser); // Respond with the created user
  });





module.exports = router;
