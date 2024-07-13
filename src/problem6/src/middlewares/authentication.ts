import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import user from "../models/user";
dotenv.config();


const Authentication = (req: Request, res: Response, next: NextFunction): void => {
  try {
    let token = req.get("Authorization");
    if (!token) {
      res.status(401).json("UnAuthorized");
    }
    else {
        const authToken = token.slice(7); 
        jwt.verify(authToken, process.env.JWT_SECRET!);
        next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Unauthorized" });
  }
};

const generateAccessToken = (user: string): string => {
  return jwt.sign({ id: user }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });
};


export { Authentication, generateAccessToken };

