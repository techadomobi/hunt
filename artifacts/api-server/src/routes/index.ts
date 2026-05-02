import { Router } from "express";
import healthRouter from "./health.js";
import offersRouter from "./offers.js";

const router = Router();

router.use(healthRouter);
router.use(offersRouter);

export default router;