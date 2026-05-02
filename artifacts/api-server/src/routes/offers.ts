import { Router, type Request, type Response } from "express";

type OfferApiResponse = {
  responseResult?: unknown[];
};

type CachedOffersPayload = {
  responseResult: unknown[];
  cachedAt: number;
};

const OFFERS_CACHE_TTL_MS = 60_000;
let cachedOffers: CachedOffersPayload | null = null;

const router = Router();

router.get("/offers", async (req: Request, res: Response) => {
  const categoryId = (req.query.categoryId as string) || "14";

  if (cachedOffers && Date.now() - cachedOffers.cachedAt < OFFERS_CACHE_TTL_MS) {
    res.setHeader("cache-control", "public, max-age=60, stale-while-revalidate=300");
    return res.status(200).json({ responseResult: cachedOffers.responseResult, cached: true });
  }

  try {
    const upstreamUrl = new URL("https://click.creditsdeal.com/api/offerList");
    upstreamUrl.searchParams.set("categoryId", categoryId);

    const upstreamResponse = await fetch(upstreamUrl.toString());

    if (!upstreamResponse.ok) {
      return res.status(502).json({
        message: "Upstream offers API request failed",
        status: upstreamResponse.status,
      });
    }

    const data = (await upstreamResponse.json()) as OfferApiResponse;
    const responseResult = Array.isArray(data.responseResult) ? data.responseResult : [];

    cachedOffers = {
      responseResult,
      cachedAt: Date.now(),
    };

    res.setHeader("cache-control", "public, max-age=60, stale-while-revalidate=300");
    return res.status(200).json({
      responseResult,
      cached: false,
    });
  } catch {
    res.setHeader("cache-control", "no-store");
    return res.status(502).json({
      message: "Unable to fetch offers from upstream API",
      responseResult: [],
    });
  }
});

export default router;
