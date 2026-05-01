import { motion } from "framer-motion";
import { Star } from "lucide-react";

import generated0 from "@assets/generated_images/generated_image_0.png";
import generated1 from "@assets/generated_images/generated_image_1.png";
import generated2 from "@assets/generated_images/generated_image_2.png";
import generated3 from "@assets/generated_images/generated_image_3.png";
import generated4 from "@assets/generated_images/generated_image_4.png";
import generated5 from "@assets/generated_images/generated_image_5.png";
import generated6 from "@assets/generated_images/generated_image_6.png";
import generated7 from "@assets/generated_images/generated_image_7.png";

type FeaturedCasino = {
  id: string;
  name: string;
  image: string;
  bonus: string;
};

const featuredCasinos: FeaturedCasino[] = [
  {
    id: "stars",
    name: "Stars Casino",
    image: generated0,
    bonus: "Stars Casino: Get $100 bonus cash + 200 bonus spins",
  },
  {
    id: "ocean",
    name: "Ocean Casino",
    image: generated1,
    bonus: "Ocean Casino: 200% match bonus up to $500 + 20 bonus spins",
  },
  {
    id: "spades",
    name: "Spades Casino",
    image: generated2,
    bonus: "1 Free Spin credited for every $1 deposit. Up to $100 + 100 Spins",
  },
  {
    id: "monte",
    name: "Monte Casino",
    image: generated3,
    bonus: "Monte Casino: Get 10 no deposit spins + $100 Bonus",
  },
  {
    id: "diamond",
    name: "Diamond Casino",
    image: generated4,
    bonus: "Diamond Casino: 150% welcome package + 50 free spins",
  },
  {
    id: "pharaoh",
    name: "Pharaoh Casino",
    image: generated5,
    bonus: "Pharaoh Casino: 100% first deposit boost + 75 spins",
  },
  {
    id: "space",
    name: "Space Casino",
    image: generated6,
    bonus: "Space Casino: Weekly cashback + 120 free spins for new players",
  },
  {
    id: "win",
    name: "Win Casino",
    image: generated7,
    bonus: "Win Casino: 50 risk-free spins and instant payout support",
  },
];

function Rating() {
  return (
    <div className="flex items-center justify-center gap-1 text-[#f6c531]">
      {Array.from({ length: 4 }).map((_, i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
      <Star className="size-4" />
    </div>
  );
}

function CasinoCard({
  casino,
  index,
}: {
  casino: FeaturedCasino;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.35) }}
      className="overflow-hidden rounded-md border border-[#d7dbe2] bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/11] overflow-hidden border-b border-[#d7dbe2]">
        <img
          src={casino.image}
          alt={casino.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="px-7 py-6 text-center">
        <h3 className="font-display text-[2.15rem] leading-[0.95] font-black tracking-tight text-[#17191f] sm:text-[2.25rem]">
          {casino.name}
        </h3>

        <div className="mt-3">
          <Rating />
        </div>

        <p className="mx-auto mt-4 max-w-[255px] text-[15px] leading-6 text-[#6b7280]">
          {casino.bonus}
        </p>

        <button className="mt-6 min-w-[170px] rounded-full bg-[#2f327e] px-10 py-3 text-lg leading-none font-bold text-white transition hover:brightness-110">
          Play Now
        </button>

        <a
          href="#"
          className="mt-3 block text-[15px] text-[#868c96] underline underline-offset-2"
        >
          T&Cs Apply
        </a>
      </div>
    </motion.article>
  );
}

export default function Home() {
  return (
    <section className="bg-[#eef1f5] py-10 md:py-12 min-h-[calc(100vh-76px)]">
      <div className="container-mx">
        <div className="mx-auto w-full max-w-[1120px] grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredCasinos.map((casino, index) => (
            <CasinoCard key={casino.id} casino={casino} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
