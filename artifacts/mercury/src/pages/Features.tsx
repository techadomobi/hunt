import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Layers, Search, Sparkles, ShieldCheck, Gauge, Headphones, Trophy, Smartphone, Globe, Zap,
  PieChart, Bell, Lock, Cloud, Code2, Palette, Languages, Star, Database, Filter, Heart, Clock,
} from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import featureMobile from "@assets/stock_images/feature_mobile.jpg";
import slotIcon from "@assets/stock_images/slot_icon.jpg";

const FEATURES = [
  { i: Layers, t: "Modular block library", d: "47 hand-crafted blocks for casinos, bonuses, slots, providers and editorial layouts." },
  { i: Search, t: "Lightning search", d: "Indexed across 12,430 games and every casino review. Sub-50 ms response anywhere on Earth." },
  { i: Sparkles, t: "Animated reels", d: "GPU-accelerated CSS animations that look as good as native casino UIs — no third-party libraries required." },
  { i: ShieldCheck, t: "Trust badges", d: "Display licences, eCogra, GamCare and your own custom safety credentials prominently." },
  { i: Gauge, t: "Core Web Vitals A+", d: "Out of the box scores in the 90s on Lighthouse — even with the heaviest game grids." },
  { i: Headphones, t: "Real-time chat", d: "Optional embedded chat widget for player support, complete with operator escalation." },
  { i: Trophy, t: "Top 10 leaderboards", d: "Auto-generated leaderboards by RTP, popularity, payout speed and bonus value." },
  { i: Smartphone, t: "Mobile-first PWA", d: "Installable as a Progressive Web App with offline reading and push notifications." },
  { i: Globe, t: "30+ languages", d: "Translation-ready with WPML, Polylang and Loco Translate. RTL fully supported." },
  { i: Zap, t: "One-click demo import", d: "Spin up the demo content with sample casinos, bonuses and 200+ slots in seconds." },
  { i: PieChart, t: "Revenue analytics", d: "Track click-throughs to operators, conversion funnels and bonus claims in a unified dashboard." },
  { i: Bell, t: "Smart notifications", d: "Alert players the moment a new bonus drops or their favourite provider releases a title." },
  { i: Lock, t: "Privacy-first", d: "GDPR & CCPA compliant out of the box, with granular cookie consent and data export." },
  { i: Cloud, t: "CDN-ready assets", d: "All assets fingerprinted and lazy-loaded. Plays nicely with Cloudflare and BunnyCDN." },
  { i: Code2, t: "Developer-friendly", d: "Clean, hookable PHP. WP-CLI commands. Composer autoloaded. Modern stack throughout." },
  { i: Palette, t: "5 colour presets", d: "Crimson, Cobalt, Onyx, Ember and Mint — switch via a single dropdown in the customiser." },
  { i: Languages, t: "Multi-currency", d: "Display bonuses in 28 currencies and convert deposit values automatically." },
  { i: Star, t: "Player reviews", d: "Built-in player rating engine with anti-spam, moderation queue and editor verification." },
  { i: Database, t: "Slots Launch plugin", d: "Bundled access to 12,430+ vendor-supplied demo games — refreshed daily." },
  { i: Filter, t: "Advanced filters", d: "Filter by RTP, paylines, volatility, theme, mechanic, jackpot type and 30+ more facets." },
  { i: Heart, t: "Favourites & lists", d: "Logged-in players can save games to themed lists and share them publicly." },
  { i: Clock, t: "Daily auto-updates", d: "Mercury checks for new releases overnight and publishes them with hero artwork automatically." },
];

export default function Features() {
  return (
    <>
      <section className="gradient-red text-white py-24 relative overflow-hidden">
        <motion.img
          src={slotIcon}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: .7, scale: 1 }}
          transition={{ duration: .8 }}
          className="absolute -right-20 -bottom-20 w-96 opacity-20 pulse-glow"
        />
        <div className="container-mx relative">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4 }}
            className="text-white/80 uppercase tracking-widest text-xs font-bold"
          >
            Best-in-class
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .1 }}
            className="mt-3 font-display font-black italic text-5xl md:text-7xl max-w-4xl text-shadow-strong"
          >
            Every feature your slot-review portal will ever need.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .2 }}
            className="mt-6 max-w-2xl text-white/90 text-lg"
          >
            Mercury ships with 22 headline features and hundreds of polish details. Most of them
            you'll never have to touch — they just work.
          </motion.p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ i: Icon, t, d }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .4, delay: Math.min(idx * .03, .3) }}
                whileHover={{ y: -3 }}
                className="p-6 bg-muted/40 rounded-lg border border-border hover:border-mercury-red hover:shadow-md transition-all"
              >
                <div className="size-11 rounded bg-mercury-red/10 text-mercury-red flex items-center justify-center mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple text-white py-24">
        <div className="container-mx grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="text-mercury-red font-bold uppercase tracking-widest text-xs">Built for operators</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3">A complete affiliate workbench.</h2>
            <p className="mt-6 text-white/85 text-lg leading-relaxed">
              Mercury ships a fully-fledged affiliate dashboard. Track impressions, click-throughs,
              registrations and FTDs (first time deposits) per operator, per bonus, per page.
              Export to CSV, schedule reports, or pipe to your BI tool of choice.
            </p>
            <ul className="mt-7 space-y-3 text-white/90">
              {[
                "Real-time conversion tracking",
                "UTM-aware deep linking",
                "A/B test slot grids and bonus blocks",
                "Cohort retention reports",
                "Anti-fraud click filtering",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="size-5 rounded-full bg-mercury-red flex items-center justify-center text-[10px]">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.img
            src={featureMobile}
            alt=""
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="THE REAL" highlight="DIFFERENCE" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            See how Mercury stacks up against the next-best WordPress casino theme.
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-border text-foreground">
                  <th className="py-4 pr-4 font-display">Feature</th>
                  <th className="py-4 px-4 font-display text-mercury-red">Mercury</th>
                  <th className="py-4 px-4 font-display text-muted-foreground">Generic Theme</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Bundled demo slots", "12,430+", "0"],
                  ["Game providers", "395+", "—"],
                  ["Animated reel components", "Yes (GPU)", "Static images"],
                  ["Affiliate analytics dashboard", "Built-in", "Plugin required"],
                  ["Lighthouse score", "98+", "60-75"],
                  ["RTL & translation", "Full", "Partial"],
                  ["WCAG 2.2 AA", "Tested", "Untested"],
                  ["Dedicated support", "12 months", "30 days"],
                  ["One-click demo import", "Yes", "Manual"],
                  ["Slots Launch plugin", "Included", "—"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-4 pr-4 text-foreground font-medium">{row[0]}</td>
                    <td className="py-4 px-4 text-mercury-red font-bold">{row[1]}</td>
                    <td className="py-4 px-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="THE 2026" highlight="ROADMAP" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            What we're shipping next. Releases roll out automatically to all licensed installs.
          </p>
          <div className="mt-14 max-w-3xl mx-auto relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-mercury-red/30" />
            {[
              { q: "Q1 2026", t: "Live operator data feed", d: "Pull current bonuses, RTP variants and game availability directly from each casino's API.", done: true },
              { q: "Q2 2026", t: "Streamer integration", d: "Embed live Twitch and Kick streams from your favourite slot streamers in real time.", done: true },
              { q: "Q3 2026", t: "Player wallet sync", d: "Optional self-hosted player wallets with per-casino spend tracking and export." },
              { q: "Q4 2026", t: "AI review assistant", d: "Draft casino reviews in seconds with a privacy-first model trained on your editorial style." },
              { q: "Q1 2027", t: "Tournament hub", d: "Auto-aggregate slot tournaments across operators with leaderboards and reminders." },
            ].map((m, i) => (
              <motion.div
                key={m.q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .4, delay: i * .08 }}
                className="relative pl-12 pb-10 last:pb-0"
              >
                <div className={`absolute left-0 top-0 size-9 rounded-full flex items-center justify-center font-display font-bold text-xs ${m.done ? "bg-mercury-red text-white" : "bg-white border-2 border-mercury-red text-mercury-red"}`}>
                  {m.done ? "✓" : i + 1}
                </div>
                <div className="bg-white border border-border rounded-lg p-5 hover:shadow-md transition">
                  <div className="text-xs uppercase tracking-widest text-mercury-red font-bold">{m.q}</div>
                  <h3 className="font-display font-bold text-xl mt-1">{m.t}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{m.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="PLAYS NICELY WITH" highlight="EVERYTHING" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Drop Mercury into any modern WordPress stack. We've tested and certified the integrations that matter.
          </p>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "WP Rocket", "Yoast SEO", "Rank Math", "WPML", "Polylang", "WooCommerce",
              "MailChimp", "ConvertKit", "Stripe", "Cloudflare", "BunnyCDN", "MaxMind",
            ].map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .3, delay: Math.min(i * .03, .2) }}
                className="aspect-[3/2] flex items-center justify-center rounded-lg bg-muted/50 border border-border hover:border-mercury-red font-display font-bold text-foreground/70 hover:text-mercury-red transition"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="bg-mercury-purple text-white py-24">
        <div className="container-mx">
          <SectionTitle pre="UNDER THE" highlight="HOOD" light />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "PHP 8.2+", d: "Modern, type-strict PHP throughout the codebase." },
              { t: "WP 6.4+", d: "Built for the latest block editor and HTML API." },
              { t: "MySQL / MariaDB", d: "Standard WordPress storage. No exotic dependencies." },
              { t: "REST + GraphQL", d: "Both APIs available out of the box." },
              { t: "WP-CLI", d: "Every common admin task scripted via the command line." },
              { t: "Composer", d: "Autoloaded dependencies, ready for CI/CD." },
              { t: "Webpack 5", d: "Asset pipeline with hot module reloading in dev." },
              { t: "PHPUnit", d: "Full unit and integration test suite included." },
            ].map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .35, delay: i * .05 }}
                className="bg-white/5 border border-white/10 rounded-lg p-5"
              >
                <div className="font-display font-black text-xl text-mercury-red">{s.t}</div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="LIGHTHOUSE" highlight="PERFECT" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            We test every release on a 4× CPU-throttled mobile profile. These are real numbers from a vanilla install.
          </p>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { l: "Performance", v: 98 },
              { l: "Accessibility", v: 100 },
              { l: "Best Practices", v: 100 },
              { l: "SEO", v: 100 },
            ].map((m, i) => (
              <motion.div
                key={m.l}
                initial={{ opacity: 0, scale: .9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .4, delay: i * .08 }}
                className="text-center"
              >
                <div className="relative size-32 mx-auto">
                  <svg viewBox="0 0 100 100" className="size-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--muted))" strokeWidth="10" />
                    <motion.circle
                      cx="50" cy="50" r="42" fill="none"
                      stroke="hsl(var(--mercury-red))" strokeWidth="10" strokeLinecap="round"
                      strokeDasharray={`${(m.v / 100) * 263.9} 263.9`}
                      initial={{ strokeDasharray: "0 263.9" }}
                      whileInView={{ strokeDasharray: `${(m.v / 100) * 263.9} 263.9` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-display font-black text-3xl text-foreground">
                    {m.v}
                  </div>
                </div>
                <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground font-bold">{m.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-red text-white py-20">
        <div className="container-mx text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl">Try every feature for free.</h2>
          <p className="mt-4 text-white/90">Spin up a sandbox install in seconds — we'll seed it with demo data.</p>
          <Link href="/buy" className="mt-8 inline-block px-8 py-3.5 bg-white text-mercury-red rounded-md font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-white/90 transition">
            Buy Mercury — $59
          </Link>
        </div>
      </section>
    </>
  );
}
