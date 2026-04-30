import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, Star } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";

const PLANS = [
  {
    name: "Single Site",
    price: 59,
    badge: null,
    features: [
      "1 site licence",
      "12 months of updates",
      "12 months of priority support",
      "All 47 blocks included",
      "Slots Launch plugin",
      "Demo content import",
    ],
    excludes: ["Multisite licence", "Extended commercial licence", "Custom dev hours"],
  },
  {
    name: "Studio",
    price: 149,
    badge: "Most popular",
    features: [
      "5 site licences",
      "Lifetime updates",
      "24 months of priority support",
      "All 47 blocks + future blocks",
      "Slots Launch plugin",
      "Demo content import",
      "White-label customiser",
      "Quarterly office hours",
    ],
    excludes: ["Custom dev hours"],
  },
  {
    name: "Agency",
    price: 449,
    badge: "Pro",
    features: [
      "Unlimited site licences",
      "Lifetime updates",
      "Lifetime priority support",
      "All 47 blocks + future blocks",
      "Slots Launch plugin",
      "Demo content import",
      "White-label customiser",
      "Monthly office hours",
      "5 hours of custom dev work",
      "Direct line to the engineering team",
    ],
    excludes: [],
  },
];

const FAQ = [
  { q: "What's included in the licence?", a: "Every plan includes the Mercury theme, the Slots Launch plugin, the demo content importer and email support for the duration listed." },
  { q: "Can I upgrade later?", a: "Yes. Upgrade to a higher plan any time and pay only the difference, prorated for unused support time." },
  { q: "Do you offer refunds?", a: "We offer a no-questions-asked 30-day refund. If Mercury isn't right for your project, email us within 30 days of purchase for a full refund." },
  { q: "Is there a free trial?", a: "We don't offer a trial install, but the live demo is fully interactive — including the customiser and admin dashboard." },
  { q: "Will it work with my existing WordPress install?", a: "Yes. Mercury runs on WordPress 6.4 and above, plays nicely with the major page builders, and works with any standards-compliant hosting." },
  { q: "Can I use Mercury on client sites?", a: "Studio and Agency plans both allow client work. Single Site licences cover a single domain you own or operate." },
];

export default function BuyMercury() {
  const [selected, setSelected] = useState("Studio");

  return (
    <>
      <section className="gradient-red text-white py-24 relative overflow-hidden">
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 -top-40 size-[700px] rounded-full border border-white/10"
        />
        <div className="container-mx relative">
          <span className="inline-flex items-center gap-2 text-white/85 uppercase tracking-widest text-xs font-bold">
            <Sparkles className="size-3" /> Limited spring offer · 25% off all plans
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="mt-3 font-display font-black italic text-5xl md:text-7xl max-w-4xl text-shadow-strong"
          >
            Launch your slots portal today.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg">
            Pick a plan, install in five minutes, and start publishing reviews this afternoon.
            Every plan ships with the Slots Launch plugin and 12,430+ demo games out of the box.
          </p>
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container-mx grid lg:grid-cols-3 gap-6">
          {PLANS.map((p, i) => {
            const active = selected === p.name;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: i * .08 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(p.name)}
                className={`relative cursor-pointer rounded-xl p-8 border-2 transition-all bg-white ${active ? "border-mercury-red shadow-2xl glow-red" : "border-border hover:border-mercury-red/40"}`}
              >
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-mercury-red text-white text-xs font-bold uppercase tracking-widest rounded-full">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-display font-black text-2xl">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display font-black text-6xl text-mercury-red">${p.price}</span>
                  <span className="text-muted-foreground">/ one-time</span>
                </div>
                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-foreground">
                      <Check className="size-5 text-mercury-red shrink-0 mt-0.5" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                  {p.excludes.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-muted-foreground">
                      <X className="size-5 shrink-0 mt-0.5" />
                      <span className="text-sm line-through">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-8 w-full py-3 rounded-md font-bold uppercase tracking-wider text-sm transition ${active ? "bg-mercury-red text-white shadow-lg hover:brightness-110" : "bg-foreground text-white hover:bg-mercury-red"}`}>
                  Choose {p.name}
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="EVERYTHING YOU GET, IN" highlight="EVERY PLAN" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Mercury theme", d: "The full WordPress theme, with all 5 colour presets and 47 blocks." },
              { t: "Slots Launch plugin", d: "Bundled access to the demo library — 12,430+ titles refreshed daily." },
              { t: "Demo importer", d: "One-click demo content with sample casinos, bonuses and 200+ slots." },
              { t: "PWA installer", d: "Turn your portal into an installable Progressive Web App overnight." },
              { t: "Affiliate analytics", d: "Track clicks, conversions and FTDs in a built-in dashboard." },
              { t: "Editorial tools", d: "Custom blocks for ratings, comparison tables, bonus codes and more." },
              { t: "RTL & translation", d: "Translation-ready out of the box. Right-to-left languages fully supported." },
              { t: "Schema markup", d: "Rich snippets for casinos, bonuses, FAQs and review aggregates." },
              { t: "Accessibility audit", d: "WCAG 2.2 AA-tested with manual screen reader walkthroughs." },
            ].map((b) => (
              <div key={b.t} className="p-6 rounded-lg border border-border hover:border-mercury-red transition">
                <h3 className="font-display font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple text-white py-20">
        <div className="container-mx">
          <SectionTitle pre="LOVED BY" highlight="6,400+ OPERATORS" light />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { n: "Marta Olsen", c: "Reels & Cards", q: "We compared Mercury to four other casino themes. Mercury was the only one that didn't need a single line of custom CSS." },
              { n: "Jules Hawthorne", c: "Spin Republic", q: "The Slots Launch plugin alone justified the purchase. Adding 12,000 demo games to a fresh install in five minutes is genuinely magical." },
              { n: "Karim El‑Sayed", c: "Casino Compass", q: "Setup, import, customise — done before lunch. We launched the next morning and ranked top three in the niche within six weeks." },
            ].map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: i * .08 }}
                className="bg-white text-foreground rounded-lg p-6 shadow-xl"
              >
                <div className="flex gap-1 text-mercury-red">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="size-4 fill-current" />)}
                </div>
                <blockquote className="mt-4">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-bold">{t.n}</div>
                  <div className="text-muted-foreground">{t.c}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx max-w-3xl">
          <SectionTitle pre="FREQUENTLY ASKED" highlight="QUESTIONS" />
          <div className="mt-12 space-y-3">
            {FAQ.map((f, i) => (
              <details key={i} className="group bg-muted/40 border border-border rounded-md p-5">
                <summary className="flex items-center justify-between cursor-pointer font-display font-bold">
                  {f.q}
                  <span className="text-mercury-red text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple text-white py-24">
        <div className="container-mx">
          <SectionTitle pre="WHAT'S NEW IN" highlight="VERSION 4" light />
          <p className="mt-5 text-center text-white/75 max-w-2xl mx-auto">
            The biggest release in Mercury's history. Forty-three new features, hundreds of polish details.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { v: "4.0.0", d: "Apr 22, 2026", t: "Mercury 4 launches: 47 blocks, full block-editor support, redesigned admin." },
              { v: "3.9.0", d: "Mar 18, 2026", t: "Live operator data feed, automatic bonus expiry detection." },
              { v: "3.8.0", d: "Feb 02, 2026", t: "Streamer integration with Twitch and Kick. New testimonial blocks." },
              { v: "3.7.0", d: "Dec 14, 2025", t: "Affiliate analytics dashboard, FTD tracking, conversion funnels." },
              { v: "3.6.0", d: "Oct 30, 2025", t: "WCAG 2.2 AA certification, full RTL polish, dark mode." },
              { v: "3.5.0", d: "Sep 09, 2025", t: "PWA support, push notifications, offline reading." },
            ].map((c, i) => (
              <motion.div
                key={c.v}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: Math.min(i * .04, .25) }}
                className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-mercury-red transition"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="font-display font-black text-mercury-red">v{c.v}</div>
                  <div className="text-xs text-white/60">{c.d}</div>
                </div>
                <p className="mt-2 text-sm text-white/85 leading-relaxed">{c.t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="MERCURY VS." highlight="THE COMPETITION" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            A brutally honest comparison against the next-best WordPress casino theme on the market.
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm bg-white border border-border rounded-lg overflow-hidden">
              <thead className="bg-mercury-red text-white">
                <tr>
                  <th className="py-4 px-5 font-display">Feature</th>
                  <th className="py-4 px-5 font-display">Mercury</th>
                  <th className="py-4 px-5 font-display">Competitor A</th>
                  <th className="py-4 px-5 font-display">Competitor B</th>
                </tr>
              </thead>
              <tbody className="text-foreground/90">
                {[
                  ["Bundled demo slots", "12,430+", "0", "1,200"],
                  ["Game providers", "395+", "—", "78"],
                  ["Animated reel components", "GPU-accelerated", "Static", "Lottie only"],
                  ["Affiliate analytics dashboard", "Built-in", "Plugin required", "Plugin required"],
                  ["Lighthouse mobile score", "98+", "62", "71"],
                  ["RTL & translation", "Full", "Partial", "Full"],
                  ["WCAG 2.2 AA tested", "Yes", "No", "Partial"],
                  ["PWA out of the box", "Yes", "No", "No"],
                  ["Dedicated 1-on-1 support", "12 months", "30 days", "60 days"],
                  ["Money-back guarantee", "30 days", "14 days", "—"],
                  ["One-click demo import", "Yes", "Manual", "Yes"],
                  ["Slots Launch plugin", "Included", "—", "—"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="py-3 px-5 font-medium">{row[0]}</td>
                    <td className="py-3 px-5 text-mercury-red font-bold">{row[1]}</td>
                    <td className="py-3 px-5 text-muted-foreground">{row[2]}</td>
                    <td className="py-3 px-5 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="HOW WE PROTECT YOUR" highlight="INVESTMENT" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "30-day money back", d: "Email us within 30 days for a full refund — no forms, no friction." },
              { t: "12 months priority support", d: "Real humans, replying within hours, not days. Email and live chat." },
              { t: "Lifetime updates available", d: "Studio and Agency plans never have to renew their licence again." },
              { t: "Source-available licence", d: "Inspect, modify and extend the codebase to suit your project." },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: i * .07 }}
                className="bg-white p-6 rounded-lg border border-border hover:border-mercury-red transition"
              >
                <div className="size-10 rounded-md bg-mercury-red/10 text-mercury-red flex items-center justify-center font-display font-black mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-red text-white py-20">
        <div className="container-mx text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl">30-day money-back guarantee.</h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
            Try Mercury risk-free for 30 days. If you don't love it, we'll refund you in full —
            no forms, no friction.
          </p>
          <button className="mt-8 px-8 py-3.5 bg-white text-mercury-red rounded-md font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-white/90 transition">
            Get Mercury — from $59
          </button>
        </div>
      </section>
    </>
  );
}
