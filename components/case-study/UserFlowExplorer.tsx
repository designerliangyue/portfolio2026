"use client";

import { useState } from "react";
import { agentInitiatedFlow } from "@/content/ai-copilot-interactive";

const channelStyles: Record<string, string> = {
  WABA: "bg-ink text-paper",
  "Private WhatsApp": "bg-ink/80 text-paper",
  Ignite: "bg-ink/15 text-ink",
  Customer: "bg-ink/10 text-ink/80"
};

export function UserFlowExplorer() {
  const [stepIndex, setStepIndex] = useState(0);
  const flow = agentInitiatedFlow;
  const step = flow.steps[stepIndex];
  const progress = ((stepIndex + 1) / flow.steps.length) * 100;

  return (
    <div className="mt-12 border border-ink/10">
      <div className="px-5 md:px-6 py-5 border-b border-ink/10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/50 mb-2">
          Agent-initiated journey
        </p>
        <p className="font-display text-lg md:text-xl tracking-tightish">{flow.title}</p>
        <p className="mt-2 text-sm text-ink/60 leading-relaxed max-w-2xl">{flow.subtitle}</p>
      </div>

      <div className="h-1 bg-ink/5">
        <div
          className="h-full bg-ink/40 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="swiss-grid gap-0">
        <div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-ink/10 p-4 md:p-5">
          <ol className="space-y-1">
            {flow.steps.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => setStepIndex(i)}
                  className={`w-full text-left px-3 py-3 rounded-sm transition-colors ${
                    i === stepIndex
                      ? "bg-ink text-paper"
                      : "text-ink/70 hover:bg-ink/[0.04]"
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block mt-1 text-sm leading-snug">{s.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="col-span-12 md:col-span-8 p-6 md:p-8 min-h-[200px] flex flex-col justify-between">
          <div>
            <span
              className={`inline-block font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 mb-4 ${channelStyles[step.channel]}`}
            >
              {step.channel}
            </span>
            <h4 className="display-3 text-xl md:text-2xl mb-3">{step.label}</h4>
            <p className="text-sm text-ink/70 leading-relaxed max-w-prose">{step.detail}</p>
          </div>

          <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-ink/10">
            <button
              type="button"
              disabled={stepIndex === 0}
              onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
              className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 disabled:opacity-30 hover:text-ink transition-colors"
            >
              ← Previous
            </button>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
              {stepIndex + 1} / {flow.steps.length}
            </span>
            <button
              type="button"
              disabled={stepIndex === flow.steps.length - 1}
              onClick={() =>
                setStepIndex((i) => Math.min(flow.steps.length - 1, i + 1))
              }
              className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50 disabled:opacity-30 hover:text-ink transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
