import jungle from "@assets/stock_images/jungle_theme.jpg";
import egypt from "@assets/stock_images/egypt_theme.jpg";
import dragon from "@assets/stock_images/dragon_theme.jpg";
import fruits from "@assets/stock_images/fruit_slot.jpg";
import mariachi from "@assets/stock_images/mariachi_theme.jpg";
import space from "@assets/stock_images/space_theme.jpg";
import viking from "@assets/stock_images/viking_theme.jpg";
import candy from "@assets/stock_images/candy_theme.jpg";
import cowboy from "@assets/stock_images/cowboy_theme.jpg";
import ocean from "@assets/stock_images/ocean_theme.jpg";

import news1 from "@assets/stock_images/news_chips.jpg";
import news2 from "@assets/stock_images/news_slots.jpg";
import news3 from "@assets/stock_images/news_cash.jpg";
import news4 from "@assets/stock_images/news_roulette.jpg";

export type Game = {
  id: string;
  title: string;
  provider: string;
  image: string;
  rtp: number;
  volatility: "Low" | "Medium" | "High";
  paylines: number;
  releaseYear: number;
  tags: string[];
};

export const providers = [
  "All Providers",
  "Pragmatic Play",
  "NetEnt",
  "Play'n GO",
  "Microgaming",
  "Yggdrasil",
  "Triple Edge Studios",
  "Spinberry",
  "Foxium",
  "Hacksaw Gaming",
  "Push Gaming",
  "Relax Gaming",
  "Nolimit City",
];

export const games: Game[] = [
  {
    id: "jungle-fortune",
    title: "Jungle Fortune Quest",
    provider: "Pragmatic Play",
    image: jungle,
    rtp: 96.5,
    volatility: "High",
    paylines: 25,
    releaseYear: 2025,
    tags: ["Adventure", "Free Spins", "Megaways"],
  },
  {
    id: "pharaohs-tomb",
    title: "Pharaoh's Hidden Tomb",
    provider: "NetEnt",
    image: egypt,
    rtp: 96.8,
    volatility: "Medium",
    paylines: 20,
    releaseYear: 2025,
    tags: ["Egyptian", "Wilds", "Bonus Buy"],
  },
  {
    id: "dragon-roar",
    title: "Dragon's Crimson Roar",
    provider: "Play'n GO",
    image: dragon,
    rtp: 96.2,
    volatility: "High",
    paylines: 50,
    releaseYear: 2025,
    tags: ["Fantasy", "Cluster Pays", "Multipliers"],
  },
  {
    id: "fruity-diamonds",
    title: "Fruity Diamond Rush",
    provider: "Microgaming",
    image: fruits,
    rtp: 96.0,
    volatility: "Low",
    paylines: 10,
    releaseYear: 2024,
    tags: ["Classic", "Retro", "Hold & Win"],
  },
  {
    id: "mariachi-gold",
    title: "Mariachi de Oro",
    provider: "Spinberry",
    image: mariachi,
    rtp: 95.7,
    volatility: "High",
    paylines: 40,
    releaseYear: 2025,
    tags: ["Day of the Dead", "Bonus Round"],
  },
  {
    id: "stellar-spin",
    title: "Stellar Spin Galaxy",
    provider: "Yggdrasil",
    image: space,
    rtp: 96.6,
    volatility: "Medium",
    paylines: 243,
    releaseYear: 2025,
    tags: ["Sci‑fi", "Expanding Wilds"],
  },
  {
    id: "viking-frost",
    title: "Viking Frostforge",
    provider: "Foxium",
    image: viking,
    rtp: 96.1,
    volatility: "High",
    paylines: 20,
    releaseYear: 2024,
    tags: ["Norse", "Free Spins", "Sticky Wilds"],
  },
  {
    id: "sweet-storm",
    title: "Sugar Storm Reels",
    provider: "Pragmatic Play",
    image: candy,
    rtp: 96.5,
    volatility: "High",
    paylines: 0,
    releaseYear: 2025,
    tags: ["Cluster Pays", "Tumble", "Multipliers"],
  },
  {
    id: "outlaw-revolver",
    title: "Outlaw Revolver",
    provider: "Hacksaw Gaming",
    image: cowboy,
    rtp: 96.3,
    volatility: "High",
    paylines: 25,
    releaseYear: 2025,
    tags: ["Wild West", "Bonus Buy"],
  },
  {
    id: "abyss-treasures",
    title: "Abyss Treasures",
    provider: "Push Gaming",
    image: ocean,
    rtp: 96.4,
    volatility: "Medium",
    paylines: 30,
    releaseYear: 2025,
    tags: ["Underwater", "Pick Bonus"],
  },
  {
    id: "fruity-diamonds-deluxe",
    title: "Fruity Diamonds Deluxe",
    provider: "Microgaming",
    image: fruits,
    rtp: 96.2,
    volatility: "Low",
    paylines: 9,
    releaseYear: 2024,
    tags: ["Classic", "Hold & Win"],
  },
  {
    id: "jungle-megaways",
    title: "Jungle Quest Megaways",
    provider: "Pragmatic Play",
    image: jungle,
    rtp: 96.5,
    volatility: "High",
    paylines: 117649,
    releaseYear: 2025,
    tags: ["Megaways", "Tumble"],
  },
];

export type Casino = {
  id: string;
  name: string;
  rating: number;
  bonus: string;
  freeSpins: number;
  wagering: number;
  minDeposit: number;
  payouts: string;
  highlights: string[];
  established: number;
  license: string;
};

export const casinos: Casino[] = [
  {
    id: "stellar-bet",
    name: "StellarBet Casino",
    rating: 4.9,
    bonus: "Up to $1,500 + 200 Free Spins",
    freeSpins: 200,
    wagering: 30,
    minDeposit: 10,
    payouts: "Within 12 hours",
    highlights: ["Crypto-friendly", "Live dealer", "Weekly cashback"],
    established: 2019,
    license: "Malta Gaming Authority",
  },
  {
    id: "moonlight-spins",
    name: "Moonlight Spins",
    rating: 4.8,
    bonus: "100% match up to $1,000",
    freeSpins: 150,
    wagering: 35,
    minDeposit: 20,
    payouts: "Within 24 hours",
    highlights: ["No-KYC withdrawals", "VIP rewards"],
    established: 2021,
    license: "Curacao eGaming",
  },
  {
    id: "cobalt-royale",
    name: "Cobalt Royale",
    rating: 4.7,
    bonus: "$3,000 Welcome Package",
    freeSpins: 350,
    wagering: 40,
    minDeposit: 25,
    payouts: "1‑3 business days",
    highlights: ["Sports + casino", "Loyalty points"],
    established: 2017,
    license: "UK Gambling Commission",
  },
  {
    id: "neon-vault",
    name: "Neon Vault",
    rating: 4.7,
    bonus: "Up to $750 + 100 FS",
    freeSpins: 100,
    wagering: 25,
    minDeposit: 10,
    payouts: "Instant for crypto",
    highlights: ["Provably fair", "Daily reload"],
    established: 2022,
    license: "Curacao eGaming",
  },
  {
    id: "ember-club",
    name: "Ember Club",
    rating: 4.6,
    bonus: "200% match up to $500",
    freeSpins: 80,
    wagering: 30,
    minDeposit: 15,
    payouts: "Within 24 hours",
    highlights: ["Tournaments", "Mobile-first"],
    established: 2020,
    license: "Malta Gaming Authority",
  },
  {
    id: "platinum-orbit",
    name: "Platinum Orbit",
    rating: 4.5,
    bonus: "150% up to $2,000",
    freeSpins: 250,
    wagering: 35,
    minDeposit: 20,
    payouts: "1‑2 business days",
    highlights: ["High-roller VIP", "Live game shows"],
    established: 2018,
    license: "Gibraltar",
  },
];

export type Bonus = {
  id: string;
  type: string;
  casino: string;
  value: string;
  code: string;
  expiresIn: string;
  terms: string;
};

export const bonuses: Bonus[] = [
  { id: "b1", type: "No Deposit", casino: "StellarBet Casino", value: "50 Free Spins on Stellar Spin Galaxy", code: "STELLAR50", expiresIn: "3 days", terms: "Wagering 30x. Max win $100." },
  { id: "b2", type: "Welcome Match", casino: "Moonlight Spins", value: "100% up to $1,000 + 150 FS", code: "MOON100", expiresIn: "30 days", terms: "Min deposit $20. Wagering 35x." },
  { id: "b3", type: "Reload", casino: "Cobalt Royale", value: "75% reload up to $300", code: "COBALT75", expiresIn: "Weekly", terms: "Active on Fridays only." },
  { id: "b4", type: "Cashback", casino: "Neon Vault", value: "20% weekly cashback up to $250", code: "NEONBACK", expiresIn: "Weekly", terms: "On net losses, no wagering." },
  { id: "b5", type: "Free Spins", casino: "Ember Club", value: "120 spins on Sugar Storm Reels", code: "SUGAR120", expiresIn: "5 days", terms: "Max win $200. Wagering 30x." },
  { id: "b6", type: "Welcome Match", casino: "Platinum Orbit", value: "150% up to $2,000 + 250 FS", code: "ORBIT150", expiresIn: "14 days", terms: "Min deposit $25. Wagering 35x." },
  { id: "b7", type: "High Roller", casino: "StellarBet Casino", value: "200% up to $5,000", code: "STELLARVIP", expiresIn: "30 days", terms: "Min deposit $500." },
  { id: "b8", type: "Crypto Bonus", casino: "Neon Vault", value: "1 BTC welcome package", code: "NEONBTC", expiresIn: "30 days", terms: "Bitcoin/Ethereum only." },
];

export type Article = {
  id: string;
  category: "Slots" | "Industry" | "Strategy" | "Regulation" | "Provider";
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
};

export const articles: Article[] = [
  {
    id: "pragmatic-april-drop",
    category: "Slots",
    title: "Pragmatic Play unveils a record-breaking April release schedule",
    excerpt: "Twelve fresh titles, three Megaways revivals, and a brand new mechanic the studio is calling 'Echo Reels'.",
    body: [
      "Pragmatic Play opened its spring catalogue with twelve new releases — the most concentrated drop the studio has ever shipped in a single month. Among them: three Megaways revivals of fan favourites and a brand new mechanic the team is calling Echo Reels, in which symbol clusters duplicate themselves on adjacent reels for chained wins.",
      "Industry veterans we spoke with at the iGaming Next conference flagged Echo Reels as the most innovative bonus engine they've seen since Hold & Win. 'It's deceptively simple, but the maths behind chained duplications is brutal,' one game designer said. 'Players are going to feel that variance.'",
      "All twelve titles are scheduled to roll out across Pragmatic-partnered casinos throughout April, with two of them — Sugar Storm Reels and Mariachi de Oro — already live for demo play right here on Mercury.",
    ],
    image: news1,
    author: "Lena Park",
    date: "April 22, 2026",
    readTime: 5,
    tags: ["Pragmatic Play", "New Releases", "Megaways"],
  },
  {
    id: "rtp-explained",
    category: "Strategy",
    title: "RTP, volatility and hit frequency: what really matters when you pick a slot",
    excerpt: "A practical guide to reading the maths behind a slot before you press spin.",
    body: [
      "Return to player, volatility, and hit frequency are the three numbers that quietly shape every spin you make. Most players know RTP — the long-run percentage a game pays back over millions of spins — but the other two arguably matter more in any single session.",
      "Volatility describes how lumpy the wins are. A high-volatility slot might pay nothing for fifty spins and then trigger a 5,000x bonus on the fifty-first. A low-volatility slot pays often, but in small amounts. Hit frequency is the percentage of spins that produce any win at all, however small.",
      "When you combine the three, you can roughly model what your bankroll will look like over the next hour. Pair a 96.5% RTP with high volatility and a hit frequency under 25%, and you're booking a session of long droughts and occasional thunderstorms — the right slot for someone chasing a big multiplier, not someone trying to clear a wagering requirement.",
    ],
    image: news2,
    author: "Marcus Gill",
    date: "April 19, 2026",
    readTime: 8,
    tags: ["Strategy", "RTP", "Volatility"],
  },
  {
    id: "ontario-regulation",
    category: "Regulation",
    title: "Ontario regulator approves three new game studios for the 2026 H2 catalogue",
    excerpt: "Hacksaw Gaming, Push Gaming and Spinberry cleared for the regulated Ontario market.",
    body: [
      "iGaming Ontario has approved three additional studios for the regulated provincial market. Hacksaw Gaming, Push Gaming and Spinberry will all begin shipping titles to AGCO-licensed operators starting in the second half of 2026.",
      "The approval follows a months-long technical certification process and brings the total number of licensed game suppliers in the province past 80. Operators we spoke with welcomed the news; player demand for Hacksaw and Push catalogues has been strong since the regulated market opened in 2022.",
      "Spinberry, the studio behind Mariachi de Oro and Luck of the Call, said the certification was a 'milestone moment' and confirmed it will localise three titles for the Ontario launch.",
    ],
    image: news3,
    author: "Priya Patel",
    date: "April 16, 2026",
    readTime: 6,
    tags: ["Ontario", "Regulation", "Licensing"],
  },
  {
    id: "live-roulette-rebrand",
    category: "Industry",
    title: "Evolution rebrands its Live Roulette portfolio with cinematic studio overhaul",
    excerpt: "Three new studios, six new presenters, and a 4K production pipeline land in May.",
    body: [
      "Evolution has confirmed a sweeping refresh of its flagship Live Roulette portfolio. The studio overhaul includes three new physical sets — Crimson, Onyx and Cobalt — alongside a 4K cinematic production pipeline borrowed from the company's award-winning game show department.",
      "The refresh comes alongside six new presenters and a redesigned player UI that surfaces side bets, history, and statistics far more prominently. Operators integrating the API will be able to deep-link directly into specific tables for the first time.",
      "Roll-out begins in May, with regulated markets in Europe and North America first in line.",
    ],
    image: news4,
    author: "Tomás Ribeiro",
    date: "April 12, 2026",
    readTime: 4,
    tags: ["Evolution", "Live Casino", "Roulette"],
  },
  {
    id: "responsible-gambling",
    category: "Industry",
    title: "Why operators are racing to build better responsible gambling tools",
    excerpt: "Behind the new wave of player protection features and the regulators forcing the change.",
    body: [
      "A quiet arms race is underway between online operators and the regulators that license them: who can build the most sophisticated responsible gambling toolkit. Affordability checks, deposit limits, reality checks, and AI-driven harm detection are all being aggressively rolled out across the major platforms.",
      "The move is partly defensive — the cost of getting it wrong has risen sharply, with multi-million dollar fines now routine in the UK and Sweden. But it's also competitive: data shows that players retain longer at operators they perceive as trustworthy.",
      "Mercury's editorial team will be tracking the leading toolkits across our reviewed casinos throughout 2026.",
    ],
    image: news1,
    author: "Lena Park",
    date: "April 9, 2026",
    readTime: 7,
    tags: ["Responsible Gambling", "Regulation"],
  },
  {
    id: "bonus-buys-banned",
    category: "Regulation",
    title: "Belgium becomes the latest market to restrict bonus buy mechanics",
    excerpt: "The Gaming Commission cites concerns over accelerated loss rates among younger players.",
    body: [
      "Belgium's Gaming Commission has confirmed it will restrict bonus buy mechanics across all licensed online casinos starting July 1. The decision follows a multi-month review of player loss data which showed bonus buys correlated with significantly accelerated session losses.",
      "Studios will be required to remove the buy-feature button or geo-block it for Belgian players, mirroring earlier moves by the UK Gambling Commission and the Netherlands.",
      "The provider community has reacted with a mix of resignation and frustration. Several studios warned that the decision pushes activity onto unregulated offshore sites where no consumer protections apply.",
    ],
    image: news2,
    author: "Priya Patel",
    date: "April 5, 2026",
    readTime: 6,
    tags: ["Belgium", "Bonus Buys", "Regulation"],
  },
];
