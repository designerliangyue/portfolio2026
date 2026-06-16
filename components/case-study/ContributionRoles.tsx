"use client";

import { useState } from "react";
import { contributionRoles } from "@/content/ai-copilot-interactive";

export function ContributionRoles() {
  const [active, setActive] = useState(contributionRoles[0].id);
  const current = contributionRoles.find((r) => r.id === active) ?? contributionRoles[0];

  return (
    <div className="mt-12 border border-ink/10 bg-paper">
      <div className="flex flex-wrap border-b border-ink/10">
        {contributionRoles.map((role) => (
          <button
            key={role.id}
            type="button"
            onClick={() => setActive(role.id)}
            className={`flex-1 min-w-[140px] px-4 py-4 text-left font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
              active === role.id
                ? "bg-ink text-paper"
                : "text-ink/50 hover:text-ink hover:bg-ink/[0.03]"
            }`}
          >
            {role.title}
          </button>
        ))}
      </div>
      <div className="p-6 md:p-8">
        <p className="text-base md:text-lg text-ink/80 leading-relaxed">
          {current.scope}
        </p>
        <ul className="mt-6 space-y-3 border-t border-ink/10 pt-6">
          {current.outputs.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm text-ink/70 leading-relaxed"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40 mt-0.5 shrink-0">
                Out
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
