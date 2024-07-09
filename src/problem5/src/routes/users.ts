import express from "express";
import User from "../models/user";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json({
            user: user
        })
    }
    catch (error) {
        res.status(400).json({
            error: "Failed to create user"
        })
    }
})

module.exports = router;
