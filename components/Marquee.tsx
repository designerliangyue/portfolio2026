"use client";

import { motion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-ribbon relative overflow-hidden py-4">
      <motion.div
        className="flex items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-xs font-medium uppercase tracking-[0.16em] md:text-sm"
          >
            {item}
            <span className="mx-6 md:mx-8" aria-hidden style={{ color: "var(--studio-accent)" }}>
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
