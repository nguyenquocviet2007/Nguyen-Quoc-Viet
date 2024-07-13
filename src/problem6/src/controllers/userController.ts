import { Request, Response } from "express";
import User from "../models/user";
import UserScore from "../models/score";
import { generateAccessToken } from "../middlewares/authentication";
import { updateTopScores } from "../services/webSocketService";
import score from "../models/score";


export default {
    CreateUser: async (req: Request, res: Response) => {
        try {
            const newUser = new User(req.body);
            const user = await newUser.save();
            let userId = user._id;
            let userScore = await UserScore.findOne({userId: userId});
                if (!userScore) {
                    const newUserScore = new UserScore({
                        userId: userId
                    });
                    const userScore = await newUserScore.save();
                }
            res.status(201).json({
                user: user,
                score: userScore?.score
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
            let userId = user?._id;
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
                let userScore = await UserScore.findOne({userId: userId}).lean();
                let score = userScore?.score
                return res.status(200).json({
                    info: user,
                    score: score,
                    token: generateAccessToken(userId as string),
                    message: "Login Successfully!!"
                })
            }
        }
        catch (error) {
            res.status(500).json({
                message: "Internal Server Error!"
            })
        }
    },

    UpdateUser: async (req: Request, res: Response) => {
        try {
            let {id} = req.params;
            let infoUpdate = req.body;
            let user = await User.findOne({_id: id});
            if (user) {
                await User.findByIdAndUpdate(
                    user._id,
                    infoUpdate
                );
                let userScore = await UserScore.findOneAndUpdate({userId: user._id}, {$inc: {score: 1}})
                updateTopScores()
                return res.status(200).json({
                    message: "Update Successfully!",
                });
            }
            else {
                return res.status(401).json({
                    message: "Cannot update information"
                });
            }
        }
        catch (error) {
            res.status(500).json({
                message: "Internal Server Error!"
            })
        }
    },
    
    // DeleteUser: async (req: Request, res: Response) => {
    //     try {
    //         let {id} = req.params;
    //         let user = await User.findOne({_id: id});
    //         if (user) {
    //             await user.deleteOne({
    //                 _id: id
    //             });
    //             return res.status(200).json({
    //                 message: "Delete Successfully!"
    //             });
    //         }
    //         else {
    //             return res.status(401).json({
    //                 message: "Cannot update information"
    //             });
    //         }
    //     }
    //     catch (error) {
    //         res.status(500).json({
    //             message: "Internal Server Error!"
    //         })
    //     }
    // }
} 