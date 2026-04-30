import { Router, type RequestHandler } from "express";
import { HealthCheckResponse } from "@workspace/api-zod";

const router = Router();

const healthHandler: RequestHandler = (_req, res) => {
  const data = HealthCheckResponse.parse({ status: "ok" });
  res.json(data);
};

router.get("/healthz", healthHandler);

export default router;
