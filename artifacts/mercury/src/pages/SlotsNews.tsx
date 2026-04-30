import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, ChevronRight, Tag } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { articles } from "@/lib/data";

const CATEGORIES = ["All", "Slots", "Provider", "Strategy"];

export default function SlotsNews() {
  const [cat, setCat] = useState("All");
  const slotsArticles = articles.filter((a) => ["Slots", "Provider", "Strategy"].includes(a.category));
  const filtered = cat === "All" ? slotsArticles : slotsArticles.filter((a) => a.category === cat);
  const [hero, ...rest] = filtered;

  return (
    <>
      <section className="bg-mercury-purple text-white py-20">
        <div className="container-mx">
          <span className="text-white/80 uppercase tracking-widest text-xs font-bold">The Slots Desk</span>
          <h1 className="mt-3 font-display font-black italic text-5xl md:text-7xl text-shadow-strong">
            Slots News
          </h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">
            Everything new from the slot studios — releases, mechanics, strategy and the maths
            behind the spins.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 border-b border-border sticky top-20 z-30">
        <div className="container-mx flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${cat === c ? "bg-mercury-red text-white" : "bg-muted text-foreground hover:bg-mercury-red/10 hover:text-mercury-red"}`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {hero && (
        <section className="bg-white py-16">
          <div className="container-mx">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
              className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-muted/40 to-white rounded-xl p-6 md:p-10 border border-border"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
                <img src={hero.image} alt={hero.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-mercury-red font-bold inline-flex items-center gap-2">
                  <Tag className="size-3" /> {hero.category} · Featured
                </div>
                <h2 className="mt-3 font-display font-black text-3xl md:text-5xl leading-tight">
                  {hero.title}
                </h2>
                <p className="mt-5 text-muted-foreground text-lg">{hero.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="size-9 rounded-full bg-mercury-purple text-white flex items-center justify-center font-bold text-xs">
                    {hero.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <span>{hero.author}</span>
                  <span>·</span>
                  <span>{hero.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1"><Clock className="size-3" /> {hero.readTime} min</span>
                </div>
                <button className="mt-7 inline-flex items-center gap-1 text-mercury-red font-bold uppercase text-xs tracking-widest">
                  Read full story <ChevronRight className="size-4" />
                </button>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      <section className="bg-muted/30 py-16">
        <div className="container-mx">
          <SectionTitle pre="MORE FROM THE" highlight="NEWSROOM" />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .45, delay: i * .07 }}
                className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition group"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-mercury-red font-bold">{a.category}</div>
                  <h3 className="font-display font-bold text-xl mt-2 leading-tight group-hover:text-mercury-red transition">{a.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm">{a.excerpt}</p>
                  <div className="mt-5 text-xs text-muted-foreground inline-flex items-center gap-2">
                    <Clock className="size-3" /> {a.readTime} min · {a.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-mx">
          <SectionTitle pre="TRENDING" highlight="TOPICS" />
          <div className="mt-12 flex flex-wrap gap-3 justify-center">
            {[
              "Megaways", "Cluster Pays", "Bonus Buy", "Hold & Win", "RTP", "Volatility",
              "Provider Spotlight", "Pragmatic Play", "Hacksaw Gaming", "Live Roulette",
              "Crypto Slots", "Mobile First", "Tournaments",
            ].map((t) => (
              <Link
                key={t}
                href="#"
                className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-semibold hover:bg-mercury-red hover:text-white transition"
              >
                #{t.toLowerCase().replace(/\s/g, "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mercury-purple text-white py-24">
        <div className="container-mx">
          <SectionTitle pre="MEET OUR" highlight="WRITERS" light />
          <p className="mt-5 text-center text-white/75 max-w-2xl mx-auto">
            Twelve full-time editors covering every corner of the slots and casino industry.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "Lena Park", r: "Senior Slots Editor", b: "Eight years at PokerNews and CardPlayer. Covers studio releases.", ix: "LP" },
              { n: "Marcus Gill", r: "Strategy Lead", b: "Ex-quant who applies real maths to slot variance and bonus EV.", ix: "MG" },
              { n: "Priya Patel", r: "Regulation Editor", b: "Tracks every regulator from Curacao to the UKGC, weekly.", ix: "PP" },
              { n: "Tomás Ribeiro", r: "Live Casino Critic", b: "Reviews studios from Bucharest to Latvia in person each year.", ix: "TR" },
              { n: "Akiko Saito", r: "Asia Correspondent", b: "Reports on the booming APAC and crypto-first casino markets.", ix: "AS" },
              { n: "Ben Hoffman", r: "Product Reviewer", b: "Mobile-first analyst — tests every operator on five devices.", ix: "BH" },
              { n: "Nadia Costa", r: "Bonus Hunter", b: "Has personally cleared more wagering than anyone you've met.", ix: "NC" },
              { n: "Jules Hawthorne", r: "Editor in Chief", b: "Twelve years building review portals. Final word on every verdict.", ix: "JH" },
            ].map((w, i) => (
              <motion.div
                key={w.n}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: .35, delay: Math.min(i * .05, .35) }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-mercury-red transition"
              >
                <div className="size-14 rounded-full bg-mercury-red text-white font-display font-black flex items-center justify-center text-lg">{w.ix}</div>
                <div className="mt-4 font-display font-bold">{w.n}</div>
                <div className="text-xs uppercase tracking-widest text-mercury-red mt-1">{w.r}</div>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{w.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-24">
        <div className="container-mx">
          <SectionTitle pre="BROWSE THE" highlight="ARCHIVE" />
          <p className="mt-5 text-center text-muted-foreground max-w-2xl mx-auto">
            Every story we've published, by month. The archive goes back to 2019.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {[
              "Apr 2026", "Mar 2026", "Feb 2026", "Jan 2026", "Dec 2025", "Nov 2025",
              "Oct 2025", "Sep 2025", "Aug 2025", "Jul 2025", "Jun 2025", "May 2025",
              "Apr 2025", "Mar 2025", "Feb 2025", "Jan 2025", "Dec 2024", "Nov 2024",
            ].map((m, i) => (
              <motion.a
                key={m}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .25, delay: Math.min(i * .02, .2) }}
                className="text-center py-3 px-2 rounded bg-white border border-border hover:border-mercury-red hover:text-mercury-red text-sm font-semibold transition"
              >
                {m}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-mx grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
          >
            <span className="text-mercury-red font-bold uppercase tracking-widest text-xs">New podcast</span>
            <h2 className="font-display font-black text-4xl md:text-5xl mt-3 leading-tight">
              The Mercury Spin.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              A weekly half-hour conversation with the people building the slots industry — game
              designers, regulators, operators and the players whose bankrolls fund it all.
              New episodes every Wednesday.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Apple Podcasts", "Spotify", "Amazon Music", "Pocket Casts", "Overcast"].map((p) => (
                <span key={p} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-semibold">{p}</span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="space-y-3"
          >
            {[
              { e: 47, t: "Inside Hacksaw — building Wanted Dead with Daniel Lindberg", d: "32 min" },
              { e: 46, t: "What it takes to launch a regulated casino in Brazil", d: "28 min" },
              { e: 45, t: "Maths, myth and Megaways with Big Time Gaming's CTO", d: "41 min" },
              { e: 44, t: "How the UKGC really decides on your licence", d: "35 min" },
            ].map((ep) => (
              <div key={ep.e} className="flex items-center gap-4 p-4 bg-muted/40 rounded-lg border border-border hover:border-mercury-red transition group">
                <div className="size-12 shrink-0 rounded-full bg-mercury-red text-white flex items-center justify-center font-display font-black">{ep.e}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-bold leading-tight group-hover:text-mercury-red transition">{ep.t}</div>
                  <div className="text-xs text-muted-foreground mt-1">{ep.d}</div>
                </div>
                <button className="size-10 shrink-0 rounded-full bg-mercury-red text-white flex items-center justify-center hover:brightness-110 transition" aria-label="Play">▶</button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="gradient-red text-white py-20">
        <div className="container-mx text-center max-w-2xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-5xl">Get the weekly Mercury digest.</h2>
          <p className="mt-4 text-white/90">Five hand-picked stories from across the slots industry. Every Friday. No spam, ever.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-5 py-3 rounded-md text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button className="px-6 py-3 bg-white text-mercury-red font-bold uppercase tracking-wider text-sm rounded-md hover:bg-white/90 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
