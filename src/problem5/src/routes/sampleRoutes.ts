import { Router } from "express";
import { sampleController } from "../controllers/sampleController";

const router = Router();

router.get('/sample', sampleController);

export default router;
