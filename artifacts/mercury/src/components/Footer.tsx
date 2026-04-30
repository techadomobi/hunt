import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-mercury-purple-deep text-white">
      <div className="container-mx py-16 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="font-display text-4xl font-black italic">mercury</div>
          <p className="mt-4 text-white/70 leading-relaxed max-w-md">
            The definitive review portal for online slots, casinos and bonuses.
            12,430+ free demo games, 395+ providers, daily editorial coverage —
            all powered by the Mercury WordPress theme and Slots Launch plugin.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="size-10 rounded-full bg-white/10 hover:bg-mercury-red transition-colors flex items-center justify-center"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wide text-sm mb-4">Explore</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/features" className="hover:text-white">Features</Link></li>
            <li><Link href="/casinos" className="hover:text-white">Top Casinos</Link></li>
            <li><Link href="/bonuses" className="hover:text-white">Bonuses</Link></li>
            <li><Link href="/slots-news" className="hover:text-white">Slots News</Link></li>
            <li><Link href="/gambling-news" className="hover:text-white">Gambling News</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wide text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#" className="hover:text-white">About Mercury</a></li>
            <li><Link href="/buy" className="hover:text-white">Buy the Theme</Link></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-wide text-sm mb-4">Get in touch</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li className="flex items-start gap-2"><Mail className="size-4 mt-0.5" /> hello@mercurytheme.example</li>
            <li className="flex items-start gap-2"><Phone className="size-4 mt-0.5" /> +1 (415) 555‑0199</li>
            <li className="flex items-start gap-2"><MapPin className="size-4 mt-0.5" /> 88 Reels Avenue, Las Vegas, NV</li>
          </ul>

          <form className="mt-6 flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 bg-white/10 placeholder:text-white/40 text-sm rounded-l-md outline-none focus:bg-white/15"
            />
            <button className="px-4 bg-mercury-red rounded-r-md text-sm font-semibold hover:brightness-110 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-mx py-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} Mercury Theme. All rights reserved. 18+. Please play responsibly.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
