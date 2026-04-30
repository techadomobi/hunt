import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center gradient-purple text-white">
      <div className="text-center px-6">
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .5 }}
          className="font-display font-black text-8xl md:text-[10rem] leading-none italic"
        >
          404
        </motion.div>
        <h1 className="mt-4 font-display font-bold text-2xl md:text-3xl">This reel didn't land.</h1>
        <p className="mt-3 text-white/80 max-w-md mx-auto">
          The page you're looking for has spun out of view. Try one of these instead.
        </p>
        <div className="mt-8 flex gap-3 justify-center">
          <Link href="/" className="px-6 py-3 bg-white text-mercury-red font-bold uppercase tracking-wider text-sm rounded-md hover:bg-white/90 transition">
            Back to home
          </Link>
          <Link href="/casinos" className="px-6 py-3 bg-mercury-red text-white font-bold uppercase tracking-wider text-sm rounded-md hover:brightness-110 transition">
            Top casinos
          </Link>
        </div>
      </div>
    </div>
  );
}
