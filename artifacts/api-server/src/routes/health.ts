import { Router, type RequestHandler } from "express";
import { HealthCheckResponse } from "@workspace/api-zod";

const router = Router();

const healthHandler: RequestHandler = (_req, res) => {
  const data = HealthCheckResponse.parse({ status: "ok" });

  // Works with both Express and Node-style response typings in serverless builders.
  res.statusCode = 200;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
};

router.get("/healthz", healthHandler);

export default router;
