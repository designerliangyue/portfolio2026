"use client";

import { useState } from "react";
import { mvpPhases } from "@/content/ai-copilot-interactive";

export function MvpPhaseRail() {
  const [active, setActive] = useState(0);
  const phase = mvpPhases[active];

  return (
    <div className="mt-10 border border-ink/10">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-ink/10 border-b border-ink/10">
        {mvpPhases.map((p, i) => (
          <button
            key={p.phase}
            type="button"
            onClick={() => setActive(i)}
            className={`p-5 text-left transition-colors ${
              i === active ? "bg-ink/[0.04]" : "hover:bg-ink/[0.02]"
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50">
              Phase {p.phase}
            </p>
            <p className="mt-2 font-display text-lg tracking-tightish leading-tight">
              {p.title}
            </p>
          </button>
        ))}
      </div>
      <div className="px-5 py-5 md:px-6 md:py-6 bg-ink/[0.02]">
        <p className="text-sm md:text-base text-ink/80 leading-relaxed max-w-3xl">
          {phase.text}
        </p>
      </div>
    </div>
  );
}
