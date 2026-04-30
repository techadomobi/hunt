import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift, Sparkles, Clock, Wallet } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { bonuses } from "@/lib/data";

const TYPES = ["All", "No Deposit", "Welcome Match", "Reload", "Cashback", "Free Spins", "High Roller", "Crypto Bonus"];

export default function Bonuses() {
  const [type, setType] = useState("All");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = type === "All" ? bonuses : bonuses.filter((b) => b.type === type);

  const copy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <section className="gradient-red text-white py-24 relative overflow-hidden">
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -right-32 -top-32 size-[500px] rounded-full border border-white/10"
        />
        <div className="container-mx relative">
          <span className="text-white/85 uppercase tracking-widest text-xs font-bold">Fair · Verified · Updated daily</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="mt-3 font-display font-black italic text-5xl md:text-7xl max-w-4xl text-shadow-strong"
          >
            Bonuses you can actually trust.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg">
            We reject any bonus with hidden terms, predatory wagering, or impossible cap structures.
            What's left is genuinely worth claiming.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sticky top-20 z-30 border-b border-border">
        <div className="container-mx flex flex-wrap gap-2 justify-center">
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${type === t ? "bg-mercury-red text-white" : "bg-muted text-foreground hover:bg-mercury-red/10 hover:text-mercury-red"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container-mx grid md:grid-cols-2 gap-6">
          {filtered.map((b, i) => (
            <motion.article
              key={b.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: .45, delay: Math.min(i * .06, .35) }}
              whileHover={{ y: -4 }}
              className="relative bg-white rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow shine"
            >
              <div className="absolute top-0 right-0 px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-mercury-red text-white rounded-bl-md">
                {b.type}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-md bg-gradient-to-br from-mercury-red to-mercury-purple text-white flex items-center justify-center font-display font-black">
                    {b.casino.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-display font-bold">{b.casino}</div>
                    <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
                      <Clock className="size-3" /> Expires in {b.expiresIn}
                    </div>
                  </div>
                </div>
                <h3 className="mt-5 font-display font-black text-2xl text-mercury-red leading-tight">{b.value}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.terms}</p>

                <div className="mt-5 flex items-stretch gap-2">
                  <div className="flex-1 border-2 border-dashed border-mercury-red rounded-md px-4 py-3 font-mono font-bold text-mercury-red text-center tracking-widest">
                    {b.code}
                  </div>
                  <button
                    onClick={() => copy(b.code)}
                    className="px-5 bg-mercury-red text-white rounded-md font-bold uppercase tracking-wider text-xs hover:brightness-110 transition flex items-center gap-2"
                  >
                    {copied === b.code ? <><Check className="size-4" /> Copied</> : <><Copy className="size-4" /> Copy</>}
                  </button>
                </div>

                <button className="mt-3 w-full px-6 py-3 bg-mercury-purple text-white rounded-md font-bold uppercase tracking-wider text-xs shadow hover:brightness-110 transition">
                  Claim bonus →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="UNDERSTANDING" highlight="BONUS TYPES" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: Gift, t: "No Deposit", d: "Free spins or a small cash credit you can claim without depositing first." },
              { i: Sparkles, t: "Welcome Match", d: "The casino matches a percentage of your first deposit, often up to several hundred dollars." },
              { i: Clock, t: "Reload", d: "Recurring offers — typically weekly — that match a percentage of subsequent deposits." },
              { i: Wallet, t: "Cashback", d: "A percentage of your net losses returned over a set period. Usually no wagering." },
            ].map(({ i: Icon, t, d }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .45, delay: idx * .08 }}
                className="p-6 rounded-lg bg-muted/40 border border-border hover:border-mercury-red transition"
              >
                <div className="size-12 rounded-md bg-mercury-red/10 text-mercury-red flex items-center justify-center mb-4">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-display font-bold text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple-deep text-white py-20">
        <div className="container-mx">
          <SectionTitle pre="DO'S &" highlight="DON'TS" light />
          <p className="mt-5 text-center text-white/75 max-w-2xl mx-auto">
            A short, opinionated checklist before you press "claim" on any bonus.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-emerald-500/30 rounded-lg p-7">
              <div className="text-emerald-400 font-display font-bold uppercase tracking-widest text-sm">Do</div>
              <ul className="mt-4 space-y-3 text-white/85">
                {[
                  "Read the wagering requirement before depositing.",
                  "Check the maximum bet allowed while clearing the bonus.",
                  "Confirm which games contribute fully to wagering.",
                  "Note the expiry window and plan your sessions accordingly.",
                  "Keep a screenshot of the terms — they can change after you claim.",
                ].map((d) => (
                  <li key={d} className="flex gap-2"><span className="text-emerald-400 mt-0.5">✓</span> {d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-mercury-red/40 rounded-lg p-7">
              <div className="text-mercury-red font-display font-bold uppercase tracking-widest text-sm">Don't</div>
              <ul className="mt-4 space-y-3 text-white/85">
                {[
                  "Don't chase a bonus you don't actually want — they always favour the house.",
                  "Don't bet above the max-bet rule. It will void your winnings.",
                  "Don't claim multiple bonuses simultaneously without checking stacking rules.",
                  "Don't ignore game weighting — slots usually count 100% but table games rarely do.",
                  "Don't rush a withdrawal. Most bonus voids happen at the cash-out step.",
                ].map((d) => (
                  <li key={d} className="flex gap-2"><span className="text-mercury-red mt-0.5">✗</span> {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="gradient-purple text-white py-24">
        <div className="container-mx">
          <SectionTitle pre="WAGERING" highlight="EXPLAINED" light />
          <p className="mt-6 max-w-3xl mx-auto text-white/85 text-center text-lg leading-relaxed">
            A wagering requirement of 30x means you must place total wagers worth 30 times the bonus
            amount before any winnings can be withdrawn. A $100 bonus at 30x requires $3,000 of total
            wagering — not $3,000 of losses.
          </p>
          <div className="mt-12 max-w-3xl mx-auto bg-white text-foreground rounded-lg p-7 shadow-2xl">
            <h3 className="font-display font-bold text-xl mb-4">Quick wagering calculator</h3>
            <p className="text-muted-foreground mb-5 text-sm">A simple guide for common bonus sizes:</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border text-foreground">
                  <th className="py-2 text-left font-display">Bonus</th>
                  <th className="py-2 text-left font-display">25x</th>
                  <th className="py-2 text-left font-display">35x</th>
                  <th className="py-2 text-left font-display">45x</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["$50", "$1,250", "$1,750", "$2,250"],
                  ["$100", "$2,500", "$3,500", "$4,500"],
                  ["$250", "$6,250", "$8,750", "$11,250"],
                  ["$500", "$12,500", "$17,500", "$22,500"],
                  ["$1,000", "$25,000", "$35,000", "$45,000"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-3 font-bold text-foreground">{row[0]}</td>
                    <td className="py-3">{row[1]}</td>
                    <td className="py-3">{row[2]}</td>
                    <td className="py-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="THIS WEEK'S" highlight="BONUS CALENDAR" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Recurring promotions across our top operators. Set a reminder so you never miss a reload.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {[
              { d: "Mon", t: "Cashback Mondays", c: "StellarBet", v: "20% on losses" },
              { d: "Tue", t: "Tuesday Reload", c: "Moonlight Spins", v: "75% up to $300" },
              { d: "Wed", t: "Free Spins Wed", c: "Ember Club", v: "50 spins on featured slot" },
              { d: "Thu", t: "Live Casino Boost", c: "Cobalt Royale", v: "10% Live cashback" },
              { d: "Fri", t: "Weekend Welcome", c: "Neon Vault", v: "100% up to $500" },
              { d: "Sat", t: "Slot Tournament", c: "Platinum Orbit", v: "$50,000 prize pool" },
              { d: "Sun", t: "Happy Spinday", c: "StellarBet", v: "100 free spins" },
            ].map((day, i) => (
              <motion.div
                key={day.d}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .3, delay: i * .04 }}
                className="rounded-lg border border-border p-4 hover:border-mercury-red hover:shadow-md transition"
              >
                <div className="text-xs uppercase tracking-widest text-mercury-red font-bold">{day.d}</div>
                <div className="font-display font-bold mt-2 leading-tight">{day.t}</div>
                <div className="text-xs text-muted-foreground mt-2">{day.c}</div>
                <div className="text-sm font-bold text-foreground mt-1">{day.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-mx max-w-3xl">
          <SectionTitle pre="BONUS" highlight="FAQ" />
          <div className="mt-12 space-y-3">
            {[
              { q: "What is a 'sticky' bonus?", a: "A sticky bonus stays in your balance — you can wager with it but you can't withdraw the bonus itself, only winnings derived from it. The bonus amount is removed when you cash out." },
              { q: "Why do my table game bets contribute less to wagering?", a: "Most operators apply a 'game weighting' — slots count 100% toward wagering, while blackjack might only count 10%. This stops players from clearing bonuses on near-zero-house-edge games." },
              { q: "Can I cash out a no-deposit bonus directly?", a: "Almost never. No-deposit bonuses come with strict wagering and a max-win cap. You'll need to wager and reach the cap before any winnings can be withdrawn." },
              { q: "Do bonuses expire?", a: "Yes. Most bonuses expire 7–30 days after activation, and some expire 24 hours after issuance if not opted into. Always check the terms." },
              { q: "Are crypto bonuses bigger?", a: "Often, yes. Lower payment processing costs let crypto-friendly casinos pass savings on, typically as larger match percentages and looser wagering." },
              { q: "Can I claim multiple bonuses at once?", a: "Sometimes — but only if the casino's terms explicitly allow stacking. Most operators force you to clear one bonus before activating another." },
            ].map((f, i) => (
              <details key={i} className="group bg-white border border-border rounded-md p-5">
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
    </>
  );
}
