import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import { Game } from "@/lib/data";

export function GameCard({ game, index = 0 }: { game: Game; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: .45, delay: Math.min(index * 0.04, .4) }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-md overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow shine"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
          <button className="inline-flex items-center gap-2 bg-mercury-red text-white px-5 py-2 rounded-full font-semibold shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform">
            <Play className="size-4 fill-current" /> Try Demo
          </button>
        </div>
        {game.releaseYear === 2025 && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-mercury-red text-white px-2 py-1 rounded">
            New
          </span>
        )}
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-white/95 text-mercury-purple px-2 py-1 rounded">
          {game.volatility}
        </span>
      </div>
      <div className="p-4 relative z-10 bg-white">
        <h3 className="font-display font-bold text-foreground line-clamp-1">{game.title}</h3>
        <a className="text-sm text-mercury-purple hover:text-mercury-red transition-colors" href="#">
          {game.provider}
        </a>
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="size-3 fill-mercury-red text-mercury-red" /> {game.rtp}% RTP
          </span>
          <span>{game.paylines >= 1000 ? `${(game.paylines / 1000).toFixed(0)}k` : game.paylines || "Cluster"} paylines</span>
        </div>
      </div>
    </motion.article>
  );
}
