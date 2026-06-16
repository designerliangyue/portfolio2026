"use client";

import { useState } from "react";
import { architectureDesign } from "@/content/ai-copilot-architecture";

const cardShell =
  "mt-12 border border-ink/10 bg-white rounded-[20px] p-8 md:p-12 lg:p-16 shadow-[0_1px_0_rgba(10,10,10,0.04)]";

export function ArchitectureExplorer() {
  const [activeId, setActiveId] = useState(architectureDesign.layers[0].id);
  const active =
    architectureDesign.layers.find((l) => l.id === activeId) ??
    architectureDesign.layers[0];

  return (
    <article className={cardShell}>
      <h3 className="font-display text-2xl md:text-[1.5rem] leading-8 tracking-[-0.025em] text-ink">
        {architectureDesign.title}
      </h3>
      <p className="mt-4 text-base leading-[22px] tracking-[-0.025em] text-ink/65">
        {architectureDesign.intro}
      </p>

      <div className="mt-8 md:mt-10 grid lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Visual stack */}
        <div className="lg:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 mb-4">
            {architectureDesign.flowLabel}
          </p>
          <div className="flex flex-col items-stretch">
            {architectureDesign.layers.map((layer, index) => {
              const isActive = layer.id === activeId;
              const isLast = index === architectureDesign.layers.length - 1;
              return (
                <div key={layer.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActiveId(layer.id)}
                    className={`w-full text-left rounded-xl border px-4 py-4 md:px-5 md:py-5 transition-colors ${
                      isActive
                        ? "border-ink bg-ink text-paper shadow-sm"
                        : "border-ink/15 bg-paper hover:border-ink/30 hover:bg-ink/[0.02]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.18em] shrink-0 ${
                          isActive ? "text-paper/60" : "text-ink/40"
                        }`}
                      >
                        Layer {layer.layer}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                          isActive ? "text-paper/50" : "text-ink/30"
                        }`}
                      >
                        {layer.subtitle}
                      </span>
                    </div>
                    <p
                      className={`mt-2 font-display text-base md:text-lg leading-tight tracking-tightish ${
                        isActive ? "text-paper" : "text-ink"
                      }`}
                    >
                      {layer.title}
                    </p>
                    {layer.channels ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {layer.channels.map((ch) => (
                          <span
                            key={ch}
                            className={`font-mono text-[9px] uppercase tracking-[0.14em] px-2 py-0.5 rounded border ${
                              isActive
                                ? "border-paper/25 text-paper/80"
                                : "border-ink/15 text-ink/55"
                            }`}
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </button>
                  {!isLast ? (
                    <div className="flex flex-col items-center py-1.5" aria-hidden>
                      <span className="block h-3 w-px bg-ink/20" />
                      <span className="font-mono text-[10px] text-ink/30">↓</span>
                      <span className="block h-3 w-px bg-ink/20" />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-ink/10 pt-8 lg:pt-0 lg:pl-8 md:pl-10">
          <p className="label mb-3">Layer {active.layer}</p>
          <h4 className="font-display text-xl md:text-2xl tracking-tightish text-ink mb-1">
            {active.title}
          </h4>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45 mb-4">
            {active.subtitle}
          </p>
          <p className="text-base text-ink/75 leading-relaxed">{active.summary}</p>

          {active.routing ? (
            <div className="mt-8 rounded-2xl border border-ink/10 p-5 md:p-6 space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/45">
                {active.routing.label}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-ink/10 bg-ink/[0.03] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50 mb-2">
                    Fast track
                  </p>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {active.routing.fastTrack}
                  </p>
                </div>
                <div className="rounded-xl border border-ink/10 bg-ink/[0.03] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50 mb-2">
                    Dynamic planning
                  </p>
                  <p className="text-sm text-ink/75 leading-relaxed">
                    {active.routing.dynamicPlanning}
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {active.ecosystem ? (
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {active.ecosystem.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-ink/10 p-4"
                >
                  <p className="text-sm font-medium text-ink leading-snug">
                    {item.name}
                  </p>
                  <p className="mt-1.5 text-xs text-ink/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          {active.highlights ? (
            <ul className="mt-8 space-y-3 border-t border-ink/10 pt-6">
              {active.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-ink/70 leading-relaxed"
                >
                  <span className="font-mono text-[10px] text-ink/35 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}
