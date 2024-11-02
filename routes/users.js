const express = require("express");
const router = express.Router();

const users = require("../data/users");
const error = require("../utilities/error");

//Get route to retrieve all users
router
  .route("/")
  .get( (req, res) => {
    res.json(users);
});

//Get user by user by ID
router
.route("/:id")
.get((req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(u => u.id === userId);
    if (user){
        res.json(user);
    }else next(error(400, "User not found"));
})


//Post route creating a new user
.post((req, res, next) => {
    const {name, username, email, phone, website, company} = req.body;

    //Validation

    if (!name || !username || !email){
        const error = new Error ('Name, username, and email are required.');
        error.status = 400;
        next(error);
    }

    //Create a new user post
    const newUser = {
        id: users.length + 1, //generate new ID
        name,
        username,
        email,
        phone,
        website,
        company,

    };

    users.push(newUser);
    res.status(error).json(newUser)
})



//export the router
module.exports = router;