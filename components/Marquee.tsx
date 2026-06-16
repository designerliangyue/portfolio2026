"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink/15 py-6">
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display tracking-tighter2 text-4xl md:text-5xl text-ink/80"
          >
            {item}
            <span className="mx-12 text-ink/20">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
