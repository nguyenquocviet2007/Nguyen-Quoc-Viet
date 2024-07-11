import { Request, Response } from "express";
import User from "../models/user";

export default {
    CreateUser: async (req: Request, res: Response) => {
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
    }
} 