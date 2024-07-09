import { Request, Response } from "express";

export const sampleController = (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello World!"
    });
};