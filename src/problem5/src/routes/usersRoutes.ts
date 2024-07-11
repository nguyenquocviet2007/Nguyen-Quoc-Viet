import express from "express";
import userController from "../controllers/userController"

const router = express.Router();

router.post("/register", userController.CreateUser);
router.post("/login", userController.GetUser);
router.put("/update/:id", userController.UpdateUser);
router.delete("/delete/:id", userController.DeleteUser);

export default router;
