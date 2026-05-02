import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Sparkles, ShieldCheck, Gauge, Headphones, Trophy, Smartphone, Globe, Zap, Users, Heart, X, ExternalLink, Star } from "lucide-react";
import heroBg from "@assets/stock_images/hero_casino.jpg";
import slotIcon from "@assets/stock_images/slot_icon.jpg";
import featureMobile from "@assets/stock_images/feature_mobile.jpg";
import { casinos, articles } from "@/lib/data";
import { ProviderMarquee } from "@/components/Marquee";
import { SectionTitle } from "@/components/SectionTitle";
import { CountUp } from "@/components/CountUp";
import generated0 from "@assets/generated_images/generated_image_0.png";

type OfferItem = {
  _id?: string;
  offerName?: string;
  image?: string;
  rating?: number;
  description1?: string;
  description2?: string;
  description3?: string;
  geo?: string;
  rewardAmount?: string | number;
  categoryName?: string;
  CreateDate?: string;
  expierdDate?: string;
  slug?: string;
  seoTitle?: string;
  metaDescription?: string;
  focusKeyphrase?: string;
  userType?: string;
  status?: string;
  offerId?: number;
  trackingLink?: string;
  buttonName?: string;
  t1?: string;
  t2?: string;
  t3?: string;
  t4?: string;
  t5?: string;
  t6?: string;
  t7?: string;
  t8?: string;
};

type OfferApiResponse = {
  responseResult?: OfferItem[];
};

const offerHeaderColors = ["#2e8b57", "#ff5733", "#6a0dad", "#1565c0"];
const offerUrlOverrides: Record<string, string> = {
  "shubham test": "https://creditmoney.in/",
  "fair go casino": "https://click.adomobi.net/tracking/click?m=6&o=41&a=10",
  testnew: "https://click.creditsdeal.com/",
  "new admin test": "https://creditsdeal.com/",
};

function normalizeOfferKey(value: string | undefined) {
  return value?.trim().toLowerCase() ?? "";
}

function getOfferActionUrl(offer: OfferItem) {
  const override = offerUrlOverrides[normalizeOfferKey(offer.offerName)];

  if (override) {
    return override;
  }

  const trackingLink = offer.trackingLink?.trim();
  if (trackingLink && /^https?:\/\//i.test(trackingLink)) {
    return trackingLink;
  }

  return "#";
}

function getOfferDetails(offer: OfferItem) {
  return [
    offer.description1,
    offer.description2,
    offer.description3,
    offer.t1,
    offer.t2,
    offer.t3,
    offer.t4,
    offer.t5,
    offer.t6,
    offer.t7,
    offer.t8,
  ].filter(Boolean) as string[];
}

export default function Home() {
  const [offers, setOffers] = useState<OfferItem[]>([]);
  const [isOffersLoading, setIsOffersLoading] = useState(true);
  const [offersError, setOffersError] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
  const [selectedOffer, setSelectedOffer] = useState<{ offer: OfferItem; index: number } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadOffers() {
      try {
        setIsOffersLoading(true);
        setOffersError(null);

        const offersEndpoint = `${import.meta.env.BASE_URL}api/offers?categoryId=14`;
        const response = await fetch(offersEndpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`);
        }

        const data = (await response.json()) as OfferApiResponse;
        const result = Array.isArray(data.responseResult) ? data.responseResult : [];
        setOffers(result);
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setOffersError("Unable to load live offers right now.");
      } finally {
        setIsOffersLoading(false);
      }
    }

    void loadOffers();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!selectedOffer) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedOffer(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOffer]);

  const closeOfferDetails = () => setSelectedOffer(null);

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative container-mx py-28 md:py-40 flex flex-col items-center text-center">
          <motion.img
            src={slotIcon}
            alt=""
            initial={{ opacity: 0, scale: .85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: .8, ease: "easeOut" }}
            className="w-28 md:w-36 mb-6 pulse-glow float-y"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .15 }}
            className="font-display font-black italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-5xl text-shadow-strong"
          >
            <CountUp to={12430} suffix="+" /> Free Slot Demos
            <br className="hidden md:block" /> with the Slots Launch plugin
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .3 }}
            className="mt-6 text-lg md:text-xl text-white/85"
          >
            <CountUp to={395} suffix="+" /> Game Providers -+ Updated Daily -+ Trusted by 1.2M Players
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .45 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3"
          >
            <Link href="/casinos" className="px-7 py-3.5 bg-white text-mercury-red rounded-md font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition shadow-lg">
              Explore Top Casinos
            </Link>
            <Link href="/bonuses" className="px-7 py-3.5 bg-mercury-red border border-white/30 text-white rounded-md font-bold uppercase tracking-wider text-sm hover:brightness-110 transition shadow-lg">
              Claim a Bonus
            </Link>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          aria-hidden
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-widest"
        >
          Scroll
        </motion.div>
      </section>

      {/* PURPLE TITLE BAND */}
      <section className="bg-mercury-purple text-white py-20">
        <SectionTitle pre="OUR TOP" highlight="ONLINE SLOTS" light />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: .2 }}
          className="mt-4 text-center text-white/70 max-w-2xl mx-auto px-4"
        >
          Hand-picked by our editorial team. Spin them all for free G�� no sign-up required.
        </motion.p>
      </section>

      {/* SEARCH / FILTER + GAMES */}
      <section className="bg-[#f0f2f5] py-12 md:py-16">
        <div className="container-mx">
          <div className="mx-auto max-w-300">
            {/* Retrieval Status */}
            {isOffersLoading && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8 rounded-lg bg-white p-4 shadow-sm text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="size-2 rounded-full bg-[#2d2f6e] animate-pulse" />
                  <span className="text-sm font-medium text-[#666]">Retrieving live offers...</span>
                </div>
              </motion.div>
            )}

            {offersError && (
              <p className="mb-6 text-center text-sm text-[#8a3344]">{offersError}</p>
            )}

            {/* Loading Skeletons */}
            {isOffersLoading && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-lg bg-white shadow-sm animate-pulse"
                  >
                    <div className="aspect-video bg-gray-200" />
                    <div className="p-5 space-y-3">
                      <div className="h-6 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-10 bg-gray-200 rounded-full w-full mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Actual Offers Grid */}
            {!isOffersLoading && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {offers.map((offer, index) => {
                  const starsCount = Math.max(1, Math.min(5, Math.round(offer.rating ?? 4)));
                  const description = [offer.description1, offer.description2].filter(Boolean).join(" ");
                  const cardKey = `${offer.offerName ?? "offer"}-${index}`;
                  const imageIsBroken = brokenImages[cardKey] || !offer.image;
                  const cardLink = getOfferActionUrl(offer);

                  return (
                    <motion.article
                      key={cardKey}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.35, delay: Math.min(index * 0.08, 0.3) }}
                      className="overflow-hidden rounded-md border border-[#d7dbe2] bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="aspect-16/11 overflow-hidden border-b border-[#d7dbe2] bg-gray-100 flex items-center justify-center">
                        {imageIsBroken ? (
                          <span className="text-sm font-semibold text-gray-500">File not found</span>
                        ) : (
                          <img
                            src={offer.image || generated0}
                            alt={offer.offerName || "Casino offer"}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            onError={() => setBrokenImages((current) => ({ ...current, [cardKey]: true }))}
                          />
                        )}
                      </div>
                      <div className="px-7 py-6 text-center">
                        <h3 className="font-display text-[2.15rem] leading-[0.95] font-black tracking-tight text-[#17191f] sm:text-[2.25rem]">
                          {offer.offerName || "Featured Offer"}
                        </h3>

                        <div className="mt-3">
                          <div className="flex items-center justify-center gap-1 text-[#f6c531]">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`size-4 ${i < starsCount ? "fill-current" : ""}`}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                        </div>

                        <p className="mx-auto mt-4 max-w-64 text-[15px] leading-6 text-[#6b7280]" style={{ maxWidth: 255 }}>
                          {description || "Exclusive casino offer"}
                        </p>

                        <button
                          type="button"
                          onClick={() => setSelectedOffer({ offer, index })}
                          className="mt-6 rounded-full bg-[#2f327e] px-10 py-3 text-lg leading-none font-bold text-white transition hover:brightness-110"
                          style={{ minWidth: 170 }}
                        >
                          {offer.buttonName || "Play Now"}
                        </button>

                        <button
                          type="button"
                          onClick={() => setSelectedOffer({ offer, index })}
                          className="mt-3 block w-full text-[15px] text-[#868c96] underline underline-offset-2 hover:text-[#666]"
                        >
                          T&Cs Apply
                        </button>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            )}

            {!isOffersLoading && offers.length === 0 && !offersError && (
              <p className="text-center text-sm text-[#666]">No offers found from the API.</p>
            )}
          </div>
        </div>
      </section>

      {selectedOffer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={closeOfferDetails}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Offer details"
          >
            <button
              type="button"
              onClick={closeOfferDetails}
              className="absolute right-4 top-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-white/95 text-[#1f2138] shadow-sm transition hover:bg-white"
              aria-label="Close offer details"
            >
              <X className="size-5" />
            </button>

            <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
              <div className="bg-[#f4f6fb]">
                <div className="aspect-video overflow-hidden bg-[#edf0f7] flex items-center justify-center">
                  {brokenImages[`${selectedOffer.offer.offerName ?? "offer"}-${selectedOffer.index}`] || !selectedOffer.offer.image ? (
                    <span className="text-sm font-semibold text-gray-500">File not found</span>
                  ) : (
                    <img
                      src={selectedOffer.offer.image || generated0}
                      alt={selectedOffer.offer.offerName || "Casino offer"}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#2d2f6e]">Live offer details</p>
                <h3 className="mt-3 text-3xl font-black leading-tight text-[#111827]">
                  {selectedOffer.offer.offerName || "Featured Offer"}
                </h3>

                <div className="mt-4 flex items-center gap-1 text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < Math.max(1, Math.min(5, Math.round(selectedOffer.offer.rating ?? 4))) ? "⭐" : "☆"}</span>
                  ))}
                </div>

                <div className="mt-6 space-y-4 text-sm leading-7 text-[#4b5563]">
                  <p>{selectedOffer.offer.description1 || "No description was returned by the API for this offer."}</p>
                  {selectedOffer.offer.description2 && <p>{selectedOffer.offer.description2}</p>}
                  <div className="rounded-xl bg-[#f8f9fc] p-4 text-sm text-[#374151]">
                    <div className="font-semibold text-[#111827]">Apply destination</div>
                    <div className="mt-1 break-all">{getOfferActionUrl(selectedOffer.offer)}</div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Reward amount", selectedOffer.offer.rewardAmount],
                      ["Geo", selectedOffer.offer.geo],
                      ["Category", selectedOffer.offer.categoryName],
                      ["Status", selectedOffer.offer.status],
                      ["Created", selectedOffer.offer.CreateDate],
                      ["Expires", selectedOffer.offer.expierdDate],
                      ["Offer ID", selectedOffer.offer.offerId],
                      ["Slug", selectedOffer.offer.slug],
                    ].map(([label, value]) =>
                      value ? (
                        <div key={label} className="rounded-xl border border-[#e5e7eb] bg-white p-3">
                          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">{label}</div>
                          <div className="mt-1 text-sm font-medium text-[#111827]">{String(value)}</div>
                        </div>
                      ) : null,
                    )}
                  </div>

                  {getOfferDetails(selectedOffer.offer).length > 0 && (
                    <div className="rounded-xl border border-[#e5e7eb] bg-white p-4">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">Full description</div>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-[#4b5563]">
                        {getOfferDetails(selectedOffer.offer).map((line, lineIndex) => (
                          <li key={`${lineIndex}-${line}`} className="flex gap-2">
                            <span className="mt-1.5 size-2 rounded-full bg-[#2d2f6e] shrink-0" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={closeOfferDetails}
                    className="rounded-full border border-[#d1d5db] px-5 py-3 text-sm font-bold text-[#1f2138] transition hover:bg-[#f3f4f6]"
                  >
                    Close
                  </button>
                  <a
                    href={getOfferActionUrl(selectedOffer.offer)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2d2f6e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1f2138]"
                  >
                    Apply now
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* PROVIDER MARQUEE */}
      <ProviderMarquee />

      {/* STATS BAND */}
      <section className="gradient-red text-white py-20">
        <div className="container-mx grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { v: 12430, suf: "+", l: "Free Slot Demos" },
            { v: 395, suf: "+", l: "Game Providers" },
            { v: 320, suf: "+", l: "Casino Reviews" },
            { v: 1.2, suf: "M", l: "Monthly Players", dec: 1 },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .1 }}
            >
              <div className="font-display font-black text-5xl md:text-6xl">
                <CountUp to={s.v} suffix={s.suf} decimals={s.dec || 0} />
              </div>
              <div className="mt-2 text-white/85 uppercase tracking-wider text-sm">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY MERCURY / FEATURES */}
      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="WHY PLAYERS LOVE" highlight="MERCURY" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            A complete review portal: editorial-grade casino reviews, the largest demo library on the web,
            and bonuses you can actually trust.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { i: ShieldCheck, t: "Independently verified", d: "Every casino is reviewed by our editorial team G�� never paid placements." },
              { i: Gauge, t: "Lightning fast demos", d: "Spin any of the 12,430+ titles instantly. No download. No sign-up." },
              { i: Sparkles, t: "Curated bonus offers", d: "We highlight only bonuses with fair wagering and transparent terms." },
              { i: Smartphone, t: "Mobile-first design", d: "Built for phones first. Crisp on tablets. Beautiful on every desktop." },
              { i: Headphones, t: "Real human support", d: "Our team responds within hours, not days. Email or live chat." },
              { i: Globe, t: "Geo-aware results", d: "Casinos and bonuses available in your country, surfaced first." },
            ].map(({ i: Icon, t, d }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .45, delay: idx * .07 }}
                whileHover={{ y: -4 }}
                className="p-7 bg-muted/50 rounded-lg border border-border hover:border-mercury-red hover:shadow-md transition-all"
              >
                <div className="size-12 rounded-md bg-mercury-red/10 text-mercury-red flex items-center justify-center mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE FEATURE */}
      <section className="bg-muted/40 py-24">
        <div className="container-mx grid lg:grid-cols-2 gap-14 items-center">
          <motion.img
            src={featureMobile}
            alt="Mercury on mobile"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-lg shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="text-mercury-red font-bold uppercase tracking-widest text-xs">On the go</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 leading-tight">
              The whole catalogue, in your pocket.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Every demo, every bonus, every casino review G�� perfectly responsive on any device.
              Pin Mercury to your home screen and treat it like a native app, complete with offline reading.
            </p>
            <ul className="mt-8 space-y-3 text-foreground">
              {["Touch-optimised slot interface", "Save favourite games to a personal list", "Push notifications for new bonuses", "Dark mode that respects your battery"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="size-6 rounded-full bg-mercury-red/15 text-mercury-red flex items-center justify-center mt-0.5">
                    <ChevronRight className="size-4" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex gap-3">
              <Link href="/features" className="px-6 py-3 bg-mercury-red text-white rounded-md font-bold uppercase text-sm tracking-wider hover:brightness-110 transition">
                See all features
              </Link>
              <Link href="/buy" className="px-6 py-3 border border-foreground/20 text-foreground rounded-md font-bold uppercase text-sm tracking-wider hover:bg-foreground hover:text-white transition">
                Buy Mercury
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TOP CASINOS PREVIEW */}
      <section className="bg-mercury-purple text-white py-20">
        <SectionTitle pre="TODAY'S TOP" highlight="CASINOS" light />
        <div className="container-mx mt-12 grid md:grid-cols-3 gap-6">
          {casinos.slice(0, 3).map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .1 }}
              className="bg-white text-foreground rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow shine"
            >
              <div className="bg-mercury-red text-white p-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-80">Rank #{i + 1}</div>
                  <div className="font-display font-black text-2xl">{c.name}</div>
                </div>
                <div className="text-right">
                  <div className="font-display font-black text-3xl">{c.rating}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">Rating</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-mercury-red font-bold">{c.bonus}</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>Established <strong className="text-foreground">{c.established}</strong></li>
                  <li>Min deposit <strong className="text-foreground">${c.minDeposit}</strong></li>
                  <li>Payouts <strong className="text-foreground">{c.payouts}</strong></li>
                </ul>
                <Link href="/casinos" className="mt-6 inline-flex items-center gap-1 text-mercury-red font-bold uppercase text-xs tracking-widest">
                  Read review <ChevronRight className="size-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/casinos" className="px-8 py-3.5 bg-white text-mercury-red rounded-md font-bold uppercase tracking-wider text-sm hover:bg-white/90 transition shadow-lg">
            See all 320+ casino reviews
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="HOW MERCURY" highlight="WORKS" />
          <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
            {[
              { n: "01", t: "Browse", d: "Scroll through 12,430+ demos sorted by provider, RTP, theme or volatility." },
              { n: "02", t: "Spin for free", d: "Try any title without registering, depositing, or downloading anything." },
              { n: "03", t: "Compare", d: "Read editorial reviews and player ratings of every reviewed casino." },
              { n: "04", t: "Claim", d: "Activate the bonus that suits you G�� wagering, free spins, or cashback." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: i * .1 }}
                className="relative text-center"
              >
                <div className="font-display font-black text-7xl text-mercury-red/15">{s.n}</div>
                <h3 className="font-display font-bold text-xl mt-2">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="LATEST FROM OUR" highlight="NEWSROOM" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: i * .08 }}
                className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-mercury-red font-bold">{a.category} -+ {a.readTime} min</div>
                  <h3 className="font-display font-bold text-xl mt-3 leading-tight group-hover:text-mercury-red transition-colors">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{a.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="size-8 rounded-full bg-mercury-purple text-white flex items-center justify-center font-bold text-xs">
                      {a.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span>{a.author} -+ {a.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="WHAT PLAYERS &" highlight="OPERATORS SAY" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: "Akira Tanaka", role: "Casino Affiliate, Tokyo", q: "I rebuilt my entire portal on Mercury. Traffic doubled in three months and our average session time tripled. The plugin is genuinely the best thing in the WordPress ecosystem.", color: "bg-mercury-red" },
              { name: "Sara Eklund", role: "Slots Reviewer, Stockholm", q: "12,000 demo titles updated automatically and the editorial layout is gorgeous. I've cancelled four other plugins since switching.", color: "bg-mercury-purple" },
              { name: "Mateo Rivas", role: "Marketing Director, Madrid", q: "Setup took us an afternoon. By the end of the week we were ranking for our top 20 casino keywords. The schema markup alone is worth the price.", color: "bg-mercury-red" },
            ].map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: i * .1 }}
                className="p-7 bg-muted/40 rounded-lg border border-border relative"
              >
                <div className="text-mercury-red text-6xl font-display leading-none">"</div>
                <blockquote className="text-foreground/90 leading-relaxed -mt-4">{t.q}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className={`size-10 rounded-full ${t.color} text-white flex items-center justify-center font-bold`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* JACKPOT TICKER */}
      <section className="bg-mercury-purple-deep text-white py-16">
        <div className="container-mx">
          <SectionTitle pre="LIVE PROGRESSIVE" highlight="JACKPOTS" light />
          <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">Tracked across 30+ networks and updated every 90 seconds.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "Mega Cosmic", v: 12_485_310, c: "Yggdrasil" },
              { n: "Royal Crown Pro", v: 6_842_975, c: "Microgaming" },
              { n: "Wheel of Coins", v: 2_310_447, c: "Pragmatic Play" },
              { n: "Storm Drop Hourly", v: 184_222, c: "Hacksaw Gaming" },
            ].map((j, i) => (
              <motion.div
                key={j.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .4, delay: i * .08 }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-mercury-red transition"
              >
                <div className="text-xs uppercase tracking-widest text-white/60">{j.c}</div>
                <div className="font-display font-bold text-xl mt-1">{j.n}</div>
                <div className="font-display font-black text-3xl text-mercury-red mt-3 tabular">
                  $<CountUp to={j.v} />
                </div>
                <div className="mt-1 text-xs text-emerald-400 inline-flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THEMES GRID */}
      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="EXPLORE BY" highlight="THEME" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Twelve hand-curated themed collections G�� pick a vibe, spin the matching reels.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { t: "Egyptian", c: "684 games", g: "from-amber-500 to-amber-700" },
              { t: "Fantasy", c: "927 games", g: "from-purple-600 to-pink-600" },
              { t: "Wild West", c: "311 games", g: "from-orange-600 to-red-700" },
              { t: "Underwater", c: "402 games", g: "from-cyan-500 to-blue-700" },
              { t: "Asian", c: "596 games", g: "from-rose-500 to-red-700" },
              { t: "Sci-fi", c: "238 games", g: "from-indigo-600 to-purple-800" },
              { t: "Classic Fruit", c: "1,108 games", g: "from-yellow-400 to-orange-600" },
              { t: "Mythology", c: "513 games", g: "from-emerald-600 to-teal-800" },
              { t: "Christmas", c: "287 games", g: "from-red-600 to-emerald-700" },
              { t: "Wildlife", c: "346 games", g: "from-green-600 to-lime-700" },
              { t: "Sports", c: "152 games", g: "from-sky-600 to-indigo-700" },
              { t: "Horror", c: "194 games", g: "from-zinc-700 to-red-900" },
            ].map((th, i) => (
              <motion.a
                key={th.t}
                href="#"
                initial={{ opacity: 0, scale: .95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: Math.min(i * .03, .3) }}
                whileHover={{ y: -4 }}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br ${th.g} p-5 flex flex-col justify-end text-white shadow hover:shadow-lg transition shine`}
              >
                <div className="font-display font-black text-xl">{th.t}</div>
                <div className="text-white/85 text-xs uppercase tracking-widest mt-1">{th.c}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSARY */}
      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="THE SLOTS" highlight="GLOSSARY" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Speak the language. Every term you'll meet on a slot's info screen, explained without jargon.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "RTP", d: "Return to Player. The percentage of total wagered money a slot pays back over the long run G�� usually 94G��97%." },
              { t: "Volatility", d: "How chunky the wins are. High volatility = rare but big. Low volatility = frequent but small." },
              { t: "Hit Frequency", d: "The percentage of spins that produce any win at all, however small." },
              { t: "Megaways", d: "A mechanic where the number of symbols per reel changes each spin, creating up to 117,649 ways to win." },
              { t: "Cluster Pays", d: "Wins are awarded for groups of 5 or more matching symbols touching, rather than left-to-right paylines." },
              { t: "Free Spins", d: "A bonus round of complimentary spins, typically triggered by 3+ scatter symbols." },
              { t: "Wild", d: "A symbol that substitutes for any other paying symbol to complete a win." },
              { t: "Scatter", d: "A symbol that pays anywhere on the reels and usually triggers bonus features." },
              { t: "Multiplier", d: "Multiplies the value of a win by a fixed amount, often growing during a bonus round." },
              { t: "Bonus Buy", d: "Pay a fixed multiple of the bet to instantly trigger the bonus round, skipping the base game." },
              { t: "Hold & Win", d: "Special symbols stick to the reels for a few respins, often awarding cash prizes when filled." },
              { t: "Max Win", d: "The capped maximum payout of a slot, usually expressed as a multiple of the bet (e.g. 5,000x)." },
            ].map((g, i) => (
              <motion.div
                key={g.t}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: Math.min(i * .03, .3) }}
                className="bg-white p-5 rounded-md border border-border hover:border-mercury-red hover:shadow-sm transition"
              >
                <div className="font-display font-bold text-mercury-red">{g.t}</div>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{g.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE / TRUST */}
      <section className="bg-white py-24">
        <div className="container-mx grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
          >
            <span className="text-mercury-red font-bold uppercase tracking-widest text-xs">Our promise</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 leading-tight">
              Editorial integrity, on every page.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Every single casino, bonus and slot featured on Mercury is reviewed by a member of
              our editorial team G�� never by an algorithm and never as a paid placement. We accept
              affiliate commissions, but we never let those relationships dictate our verdicts.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              {[
                { v: "320+", l: "Reviews" },
                { v: "12", l: "Editors" },
                { v: "0", l: "Paid rankings" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display font-black text-3xl text-mercury-red">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { t: "GamCare partner", d: "Active member since 2021" },
              { t: "eCogra audited", d: "Annual fairness review" },
              { t: "Licensed reviewers", d: "12 in-house editors" },
              { t: "GDPR compliant", d: "Full data export & deletion" },
            ].map((b, i) => (
              <div key={b.t} className="p-6 rounded-lg bg-mercury-purple text-white shadow-lg">
                <div className="size-10 rounded-full bg-white/15 flex items-center justify-center mb-3 font-display font-black">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-bold">{b.t}</div>
                <div className="text-sm text-white/70 mt-1">{b.d}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-red text-white py-24 relative overflow-hidden">
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 size-[600px] rounded-full border border-white/10"
        />
        <motion.div
          aria-hidden
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -left-32 -bottom-32 size-[400px] rounded-full border border-white/10"
        />
        <div className="container-mx text-center relative">
          <h2 className="font-display font-black italic text-4xl md:text-6xl">Ready to spin?</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto text-lg">
            Join 1.2 million players who use Mercury to discover their next favourite slot.
            Or, if you're an operator G�� launch your own portal in under an hour.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/casinos" className="px-8 py-3.5 bg-white text-mercury-red rounded-md font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-white/90 transition">
              Find your casino
            </Link>
            <Link href="/buy" className="px-8 py-3.5 bg-mercury-purple text-white rounded-md font-bold uppercase tracking-wider text-sm shadow-lg hover:brightness-110 transition">
              Buy Mercury G�� $59
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/80 text-sm">
            {[
              { i: Trophy, t: "Award-winning" },
              { i: Zap, t: "Lightning fast" },
              { i: Users, t: "1.2M+ players" },
              { i: Heart, t: "Built with care" },
            ].map(({ i: Icon, t }) => (
              <span key={t} className="inline-flex items-center gap-2"><Icon className="size-4" />{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
