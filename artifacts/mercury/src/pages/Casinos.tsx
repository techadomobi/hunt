import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Check, ShieldCheck, Clock, CreditCard, Award, ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { casinos } from "@/lib/data";

const FILTERS = ["All", "Crypto", "VIP", "Mobile-First", "Live Dealer", "Sportsbook"];

export default function Casinos() {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState<string | null>(casinos[0].id);

  return (
    <>
      <section className="gradient-purple text-white py-24">
        <div className="container-mx">
          <span className="text-white/80 uppercase tracking-widest text-xs font-bold">Top rated · April 2026</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="mt-3 font-display font-black italic text-5xl md:text-7xl max-w-4xl text-shadow-strong"
          >
            The 6 best online casinos this month.
          </motion.h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg">
            We reviewed 320 operators across licence quality, payout speed, bonus fairness, game library
            and customer support. These six came out on top.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sticky top-20 z-30 border-b border-border">
        <div className="container-mx flex flex-wrap gap-2 justify-center">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === f ? "bg-mercury-red text-white" : "bg-muted text-foreground hover:bg-mercury-red/10 hover:text-mercury-red"}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container-mx grid gap-6">
          {casinos.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: .5, delay: i * .05 }}
              className="bg-white rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-[180px_1fr_220px] gap-6 p-6 items-center">
                <div className="text-center">
                  <div className="aspect-square w-32 mx-auto rounded-md bg-gradient-to-br from-mercury-red to-mercury-purple flex items-center justify-center text-white font-display font-black text-3xl text-center px-2">
                    {c.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <div className="mt-3 font-display font-bold">{c.name}</div>
                  <div className="text-xs text-muted-foreground">Rank #{i + 1}</div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className={`size-5 ${k < Math.floor(c.rating) ? "fill-mercury-red text-mercury-red" : "text-border"}`} />
                    ))}
                    <span className="ml-2 font-bold text-lg">{c.rating}</span>
                    <span className="text-sm text-muted-foreground">/ 5</span>
                  </div>
                  <h3 className="mt-3 font-display font-black text-2xl">{c.bonus}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.highlights.map((h) => (
                      <span key={h} className="text-xs px-2 py-1 rounded-full bg-mercury-red/10 text-mercury-red font-semibold">{h}</span>
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-mercury-purple" /> {c.license.split(" ")[0]}</div>
                    <div className="flex items-center gap-2"><Clock className="size-4 text-mercury-purple" /> {c.payouts}</div>
                    <div className="flex items-center gap-2"><CreditCard className="size-4 text-mercury-purple" /> Min ${c.minDeposit}</div>
                    <div className="flex items-center gap-2"><Award className="size-4 text-mercury-purple" /> Est. {c.established}</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:items-end">
                  <button className="w-full md:w-auto px-6 py-3 bg-mercury-red text-white rounded-md font-bold uppercase tracking-wider text-sm shadow hover:brightness-110 transition shine">
                    Visit casino
                  </button>
                  <button
                    onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                    className="text-sm text-mercury-purple font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Read full review
                    <ChevronDown className={`size-4 transition-transform ${expanded === c.id ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>

              {expanded === c.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="bg-muted/40 border-t border-border px-6 py-6 grid md:grid-cols-3 gap-6 text-sm"
                >
                  <div>
                    <h4 className="font-display font-bold mb-2 text-foreground">What we loved</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><Check className="size-4 text-mercury-red mt-0.5" /> Bonus terms are crystal clear and printed on the deposit page itself.</li>
                      <li className="flex gap-2"><Check className="size-4 text-mercury-red mt-0.5" /> Withdrawal speeds were the fastest in our test pool, averaging under 12 hours.</li>
                      <li className="flex gap-2"><Check className="size-4 text-mercury-red mt-0.5" /> Live chat answered every test question in under 90 seconds.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2 text-foreground">Could be better</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>· Slots library skews towards a single provider family.</li>
                      <li>· VIP scheme is invite-only and not transparent about thresholds.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2 text-foreground">Verdict</h4>
                    <p className="text-muted-foreground">
                      A polished, fast, fair operator that earns its place at the top of the list. Especially
                      strong choice for crypto-first players and anyone who values a quick payout over flashy promotions.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="HOW WE" highlight="REVIEW CASINOS" />
          <div className="mt-14 grid md:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Licensing & safety", d: "We verify the operator's licence directly with the regulator and audit their KYC and responsible gambling tools." },
              { n: "02", t: "Bonus fairness", d: "Wagering, max bet, eligible games and expiry windows are all weighed against industry medians." },
              { n: "03", t: "Payout speed", d: "We process real test withdrawals across crypto, e-wallet and bank transfer rails and time every step." },
              { n: "04", t: "Support quality", d: "Our team submits 12 anonymous support tickets and rates response time, accuracy and tone." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: i * .1 }}
              >
                <div className="font-display font-black text-6xl text-mercury-red/15">{s.n}</div>
                <h3 className="font-display font-bold text-xl mt-2">{s.t}</h3>
                <p className="mt-3 text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple text-white py-24">
        <div className="container-mx">
          <SectionTitle pre="PAYMENT" highlight="METHODS" light />
          <p className="mt-5 text-center text-white/75 max-w-2xl mx-auto">
            Average deposit and withdrawal speeds across our top six operators, by payment method.
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm bg-white/5 rounded-lg overflow-hidden">
              <thead className="bg-white/10">
                <tr>
                  <th className="py-4 px-6 font-display">Method</th>
                  <th className="py-4 px-6 font-display">Deposit speed</th>
                  <th className="py-4 px-6 font-display">Withdrawal speed</th>
                  <th className="py-4 px-6 font-display">Min / Max</th>
                  <th className="py-4 px-6 font-display">Fees</th>
                </tr>
              </thead>
              <tbody className="text-white/85">
                {[
                  ["Bitcoin / Ethereum", "Instant", "Under 1 hour", "$10 / Unlimited", "Network only"],
                  ["Visa / Mastercard", "Instant", "1–3 business days", "$10 / $5,000", "0%"],
                  ["Skrill / Neteller", "Instant", "Under 24 hours", "$10 / $10,000", "0%"],
                  ["Apple Pay", "Instant", "1–2 business days", "$10 / $5,000", "0%"],
                  ["Bank Transfer", "1–3 days", "3–5 business days", "$50 / Unlimited", "0%"],
                  ["Trustly / iDEAL", "Instant", "Under 24 hours", "$20 / $25,000", "0%"],
                  ["PayPal", "Instant", "Under 24 hours", "$10 / $10,000", "0%"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/10">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-4 px-6 ${j === 0 ? "font-bold text-white" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="AVAILABILITY BY" highlight="REGION" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Casinos available to players in your country, by major market.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { c: "United Kingdom", n: 6, lic: "UKGC" },
              { c: "Canada (Ontario)", n: 5, lic: "AGCO" },
              { c: "Germany", n: 4, lic: "GGL" },
              { c: "Sweden", n: 5, lic: "Spelinspektionen" },
              { c: "Australia", n: 3, lic: "Various" },
              { c: "New Zealand", n: 4, lic: "Offshore MGA" },
              { c: "Brazil", n: 5, lic: "SECAP" },
              { c: "Japan", n: 0, lic: "Restricted" },
              { c: "France", n: 2, lic: "ANJ" },
              { c: "Spain", n: 3, lic: "DGOJ" },
              { c: "Mexico", n: 4, lic: "SEGOB" },
              { c: "South Africa", n: 3, lic: "WCGRB" },
            ].map((r, i) => (
              <motion.div
                key={r.c}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: Math.min(i * .03, .25) }}
                className="p-5 rounded-md border border-border hover:border-mercury-red transition group"
              >
                <div className="flex items-baseline justify-between">
                  <div className="font-display font-bold">{r.c}</div>
                  <div className="font-display font-black text-mercury-red text-xl">{r.n}</div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">Licence: {r.lic}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="HEAD-TO-HEAD" highlight="COMPARISON" />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm bg-white rounded-lg overflow-hidden border border-border">
              <thead className="bg-mercury-red text-white">
                <tr>
                  <th className="py-4 px-5 font-display">Casino</th>
                  <th className="py-4 px-5 font-display">Bonus</th>
                  <th className="py-4 px-5 font-display">Wagering</th>
                  <th className="py-4 px-5 font-display">Payout speed</th>
                  <th className="py-4 px-5 font-display">Min deposit</th>
                  <th className="py-4 px-5 font-display">Rating</th>
                </tr>
              </thead>
              <tbody className="text-foreground/90">
                {casinos.map((c) => (
                  <tr key={c.id} className="border-t border-border hover:bg-muted/30 transition">
                    <td className="py-4 px-5 font-bold">{c.name}</td>
                    <td className="py-4 px-5 text-mercury-red font-semibold">{c.bonus}</td>
                    <td className="py-4 px-5">{c.wagering}x</td>
                    <td className="py-4 px-5">{c.payouts}</td>
                    <td className="py-4 px-5">${c.minDeposit}</td>
                    <td className="py-4 px-5"><span className="font-display font-black">{c.rating}</span><span className="text-muted-foreground">/5</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="FREQUENTLY ASKED" highlight="QUESTIONS" />
          <div className="mt-12 max-w-3xl mx-auto space-y-3">
            {[
              { q: "Is it safe to play at the casinos you list?", a: "Yes — every casino on Mercury holds a current licence from a recognised regulator and has been independently reviewed by our editorial team." },
              { q: "Do you take payment from operators to be listed?", a: "We may receive an affiliate commission when a player signs up via our links, but commercial relationships never affect a casino's rank or rating." },
              { q: "How often is the list updated?", a: "Rankings are reviewed weekly and the full list is re-audited every quarter." },
              { q: "What's the difference between RTP and house edge?", a: "RTP is the percentage of money returned to players over millions of spins. House edge is simply 100% minus RTP — it represents the casino's mathematical advantage." },
            ].map((f, i) => (
              <details key={i} className="group bg-white border border-border rounded-md p-5 shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer font-display font-bold">
                  {f.q}
                  <ChevronDown className="size-5 transition-transform group-open:rotate-180 text-mercury-red" />
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
