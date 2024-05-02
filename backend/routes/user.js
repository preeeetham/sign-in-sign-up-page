const { Router } = require("express");
const {User} = require("../database/db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const{username,password,email}=req.body;

    // check if a user with this username already exists
    await User.create({
        username: username,
        password: password,
        email: email
    }) 

    res.json({
        message: 'User created successfully'
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    console.log(JWT_SECRET);

    const user = await User.find({
        username,
        password
    })
    if (user) {
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
});







module.exports = router;