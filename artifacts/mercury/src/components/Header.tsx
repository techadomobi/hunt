import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features", badge: "Best" },
  { label: "Casinos", href: "/casinos", badge: "Top" },
  { label: "Bonuses", href: "/bonuses", badge: "Fair" },
  { label: "Slots News", href: "/slots-news" },
  { label: "Gambling News", href: "/gambling-news" },
  { label: "Buy Mercury", href: "/buy", badge: "New" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-mercury-red text-white shadow-md">
      <div className="container-mx flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4 }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="GamezHunt"
              className="h-11 w-auto min-w-48 object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.34)] sm:h-14 sm:min-w-60"
            />
          </motion.span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[15px] font-medium">
          {NAV.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 transition-colors hover:text-white/80 ${active ? "text-white" : "text-white/95"}`}
              >
                {item.badge && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white text-mercury-red">
                    {item.badge}
                  </span>
                )}
                <span>{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-1 h-0.5 bg-white rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-full hover:bg-white/15 transition-colors"
          >
            <Search className="size-5" />
          </button>
          <button
            aria-label="Menu"
            className="lg:hidden p-2 rounded-full hover:bg-white/15"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-mercury-red border-t border-white/15"
          >
            <div className="container-mx py-4 grid gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-2 text-white/95 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white text-mercury-red">
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <ChevronDown className="size-4 -rotate-90 opacity-60" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm flex items-start justify-center pt-32 px-4"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b">
                <Search className="size-5 text-muted-foreground" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Search 12,430+ slots, casinos, newsGǪ"
                  className="flex-1 outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button onClick={() => setSearchOpen(false)} className="p-1 rounded hover:bg-muted">
                  <X className="size-5 text-muted-foreground" />
                </button>
              </div>
              <div className="p-5 text-sm text-muted-foreground">
                Try <span className="text-mercury-red font-semibold">"Megaways"</span>,{" "}
                <span className="text-mercury-red font-semibold">"Pragmatic Play"</span> or{" "}
                <span className="text-mercury-red font-semibold">"no deposit bonus"</span>.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
