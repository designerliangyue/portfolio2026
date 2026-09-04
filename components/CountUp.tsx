"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const NUM_RE = /^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/s;

/** Renders the real value in the initial HTML, then visually counts the
 *  numeric part up from 0 in the browser when scrolled into view,
 *  preserving any prefix/suffix (e.g. "73.5%", "300+", "60 days").
 *  Values without a number render unchanged. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const reduceMotion = useReducedMotion();

  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const m = value.match(NUM_RE);
    if (!m || reduceMotion) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const [, before, numToken, after] = m;
    const target = parseFloat(numToken.replace(/,/g, ""));
    const decimals = numToken.includes(".") ? numToken.split(".")[1].length : 0;
    const grouped = numToken.includes(",");
    const duration = 1100;
    const start = performance.now();
    let raf = 0;

    setDisplay(`${before}0${after}`);

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = target * eased;
      let out = decimals ? current.toFixed(decimals) : String(Math.round(current));
      if (grouped) out = Number(out).toLocaleString();
      setDisplay(`${before}${out}${after}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduceMotion]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display}
    </span>
  );
}
