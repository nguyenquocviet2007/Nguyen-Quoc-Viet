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
    },
    GetUser: async (req: Request, res: Response) => {
        try{
            let {email, password} = req.body;
            let user = await User.findOne({email}).lean();
            if (!user) {
                return res.status(400).json({
                    message: "Invalid Email or Password!!"
                })
            }
            else if (password !== user.password) {
                return res.status(400).json({
                    message: "Invalid Email or Password!!"
                })
            }
            else {
                return res.status(200).json({
                    message: "Login Successfully!!"
                })
            }
        }
        catch (error) {
            res.status(400).json({
                error: "Failed to Login"
            })
        }
    }
} 