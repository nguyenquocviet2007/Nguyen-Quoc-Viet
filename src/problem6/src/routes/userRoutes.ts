import express from "express";
import UserController from "../controllers/userController";
import { Authentication } from "../middlewares/authentication";

const router = express.Router();

router.post("/register", UserController.CreateUser);
router.post("/login", UserController.GetUser);
router.put("/update/:id", Authentication, UserController.UpdateUser);
// router.delete("/delete/:id", UserController.DeleteUser);

export default router;
