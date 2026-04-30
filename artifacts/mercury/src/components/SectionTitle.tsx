import { motion } from "framer-motion";

export function SectionTitle({
  pre,
  highlight,
  className = "",
  light = false,
}: {
  pre: string;
  highlight: string;
  className?: string;
  light?: boolean;
}) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}
      className={`font-display font-black text-3xl sm:text-4xl md:text-5xl text-center tracking-tight ${light ? "text-white" : "text-foreground"} ${className}`}
    >
      {pre}{" "}
      <span className="text-mercury-red">{highlight}</span>
    </motion.h2>
  );
}
