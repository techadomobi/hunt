import { Router, type Request, type Response } from "express";
import { HealthCheckResponse } from "@workspace/api-zod";

const router = Router();

const healthHandler = (_req: Request, res: Response) => {
  const data = HealthCheckResponse.parse({ status: "ok" });

  // Works with both Express and Node-style response typings in serverless builders.
  // Cast to any for low-level Node.js response methods that Express types may not expose
  const nodeRes = res as any;
  nodeRes.statusCode = 200;
  nodeRes.setHeader("content-type", "application/json; charset=utf-8");
  nodeRes.end(JSON.stringify(data));
};

router.get("/healthz", healthHandler);

export default router;
