import { motion } from "framer-motion";
import { Clock, TrendingUp, Globe2, AlertCircle } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { articles } from "@/lib/data";

const STATS = [
  { v: "$92.4B", l: "Global iGaming GGR 2025" },
  { v: "+14.2%", l: "Year-on-year growth" },
  { v: "78", l: "Regulated jurisdictions" },
  { v: "412M", l: "Active monthly players" },
];

export default function GamblingNews() {
  const industry = articles.filter((a) => ["Industry", "Regulation"].includes(a.category));

  return (
    <>
      <section className="gradient-purple text-white py-24">
        <div className="container-mx">
          <span className="text-white/85 uppercase tracking-widest text-xs font-bold">Industry & Regulation</span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
            className="mt-3 font-display font-black italic text-5xl md:text-7xl text-shadow-strong"
          >
            Gambling News
          </motion.h1>
          <p className="mt-6 max-w-2xl text-white/90 text-lg">
            The business of gambling — regulators, mergers, M&A, public-policy fights and the
            people shaping the industry.
          </p>
        </div>
      </section>

      <section className="bg-mercury-red text-white py-12">
        <div className="container-mx grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08 }}
            >
              <div className="font-display font-black text-4xl md:text-5xl">{s.v}</div>
              <div className="mt-1 text-white/85 text-sm uppercase tracking-wider">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-mx grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid gap-8">
            {industry.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .5, delay: i * .07 }}
                className="grid sm:grid-cols-[260px_1fr] gap-6 bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-mercury-red font-bold">{a.category}</div>
                  <h3 className="mt-2 font-display font-bold text-2xl leading-tight">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground">{a.excerpt}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{a.body[0]}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {a.readTime} min</span>
                    <span>·</span>
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>by {a.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="space-y-8">
            <div className="bg-muted/40 rounded-lg p-6 border border-border">
              <h3 className="font-display font-bold text-lg flex items-center gap-2">
                <TrendingUp className="size-5 text-mercury-red" /> Most read this week
              </h3>
              <ol className="mt-4 space-y-3 text-sm">
                {[
                  "Pragmatic Play unveils a record April release",
                  "Ontario approves three new game studios",
                  "Belgium restricts bonus buy mechanics",
                  "Evolution overhauls Live Roulette portfolio",
                  "The new responsible gambling arms race",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-display font-black text-2xl text-mercury-red leading-none">{i + 1}</span>
                    <span className="text-foreground hover:text-mercury-red cursor-pointer transition">{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-mercury-purple text-white rounded-lg p-6">
              <h3 className="font-display font-bold text-lg flex items-center gap-2">
                <Globe2 className="size-5" /> By region
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {[
                  ["Europe", 42], ["North America", 28], ["Latin America", 12],
                  ["Asia-Pacific", 11], ["Africa", 4], ["Middle East", 3],
                ].map(([region, pct]) => (
                  <li key={region as string}>
                    <div className="flex justify-between mb-1">
                      <span>{region}</span>
                      <span className="font-bold">{pct}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-mercury-red rounded-full"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-border">
              <h3 className="font-display font-bold text-lg flex items-center gap-2">
                <AlertCircle className="size-5 text-mercury-red" /> Editor's picks
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {industry.slice(0, 3).map((a) => (
                  <li key={a.id} className="border-b border-border pb-3 last:border-0">
                    <div className="text-xs text-mercury-red font-bold uppercase">{a.category}</div>
                    <div className="text-foreground hover:text-mercury-red cursor-pointer">{a.title}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container-mx">
          <SectionTitle pre="THIS WEEK'S" highlight="MARKET MOVERS" />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="py-3 pr-4 font-display">Operator</th>
                  <th className="py-3 px-4 font-display">Stock</th>
                  <th className="py-3 px-4 font-display">Change</th>
                  <th className="py-3 px-4 font-display">Catalyst</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Evolution AB", "EVO.ST", "+4.8%", "Live Roulette refresh & 4K studio overhaul"],
                  ["Flutter Entertainment", "FLTR.L", "+2.1%", "Brazil sportsbook market entry"],
                  ["Entain", "ENT.L", "-1.4%", "UK regulator settlement reported"],
                  ["DraftKings", "DKNG", "+5.6%", "Strong Q1 user growth"],
                  ["Bally's Corp", "BALY", "-0.8%", "Casino licence review in Pennsylvania"],
                  ["Light & Wonder", "LNW", "+3.2%", "Slot studio acquisition closed"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-white transition">
                    <td className="py-3 pr-4 font-bold text-foreground">{row[0]}</td>
                    <td className="py-3 px-4 text-muted-foreground font-mono">{row[1]}</td>
                    <td className={`py-3 px-4 font-bold ${row[2].startsWith("+") ? "text-emerald-600" : "text-mercury-red"}`}>{row[2]}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx">
          <SectionTitle pre="EXECUTIVE" highlight="MOVES" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Who's joining, leaving and shuffling chairs across the industry this month.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              { p: "Helena Roque", t: "appointed CEO of Spinberry", d: "Joins from Pragmatic Play after seven years." },
              { p: "Daniel Voss", t: "promoted to CPO at Hacksaw Gaming", d: "Internal promotion after the studio's record Q1." },
              { p: "Aaron Fitch", t: "leaves Evolution to advise Light & Wonder", d: "Eight-year veteran moves into a non-executive role." },
              { p: "Sofia Marín", t: "joins Push Gaming as Head of Latam", d: "Will lead the studio's Brazil and Mexico go-to-market." },
              { p: "Yuki Tanaka", t: "named Chair of the Japan iGaming Council", d: "First chair following the council's incorporation." },
              { p: "Olu Adebayo", t: "appointed Compliance Director at Cobalt Royale", d: "Joins from the UKGC after twelve years in the regulator." },
            ].map((m, i) => (
              <motion.div
                key={m.p}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: Math.min(i * .04, .25) }}
                className="flex gap-4 p-5 bg-muted/40 rounded-lg border border-border hover:border-mercury-red transition"
              >
                <div className="size-12 rounded-full bg-mercury-purple text-white font-display font-black flex items-center justify-center shrink-0">
                  {m.p.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-display font-bold">{m.p}</div>
                  <div className="text-mercury-red font-semibold text-sm">{m.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{m.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple-deep text-white py-24">
        <div className="container-mx grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="text-mercury-red font-bold uppercase tracking-widest text-xs">Editor's column</span>
            <h2 className="mt-3 font-display font-black italic text-4xl md:text-5xl leading-tight">
              The next ten years of online gambling will be decided by trust, not technology.
            </h2>
            <div className="mt-6 space-y-5 text-white/85 text-lg leading-relaxed">
              <p>
                Every conversation I've had at this year's iGaming conferences eventually circled
                back to the same theme: trust. Operators are spending more on responsible gambling
                tooling than ever before, and they're doing it not because they're forced to —
                although in some markets they certainly are — but because the data is unambiguous.
                Players who feel safe stay longer, deposit more sustainably, and recommend the
                operator to friends.
              </p>
              <p>
                The operators that get this right will define the next decade. The ones that don't
                will be priced out by the cost of regulatory penalties, reputational damage, and
                slowly evaporating player loyalty. It's no longer a question of whether to invest
                in player protection — it's a question of whether your competitors are doing it faster.
              </p>
              <p>
                That, more than any single technological breakthrough, is the story we'll be
                covering at Mercury for the rest of 2026.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <div className="size-10 rounded-full bg-mercury-red text-white flex items-center justify-center font-bold">JH</div>
              <div>
                <div className="font-bold">Jules Hawthorne</div>
                <div className="text-white/60 text-sm">Editor in Chief</div>
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="font-display font-bold text-lg">Upcoming events</h3>
              <ul className="mt-4 space-y-4 text-sm text-white/85">
                {[
                  { d: "May 14", t: "iGB Live, London" },
                  { d: "Jun 02", t: "SBC Summit Lisbon" },
                  { d: "Jun 24", t: "Canadian Gaming Summit" },
                  { d: "Sep 16", t: "G2E Las Vegas" },
                  { d: "Oct 28", t: "ICE Barcelona" },
                ].map((e) => (
                  <li key={e.d} className="flex justify-between border-b border-white/10 pb-2 last:border-0">
                    <span>{e.t}</span>
                    <span className="text-mercury-red font-bold">{e.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
