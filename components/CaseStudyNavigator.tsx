"use client";

import { useEffect, useState } from "react";

type NavItem = { href: string; label: string };

export function CaseStudyNavigator({ label, items }: { label: string; items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-22% 0px -60% 0px", threshold: [0, 0.15, 0.4] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const links = (
    <div className="flex flex-col gap-1.5">
      {items.map((item, index) => {
        const selected = active === item.href;
        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={selected ? "location" : undefined}
            onClick={() => {
              setActive(item.href);
              setOpen(false);
            }}
            className="group flex items-center gap-2 rounded-xl px-2.5 py-2 text-left text-xs transition-colors"
            style={selected ? { background: "var(--studio-accent-soft)", color: "var(--studio-accent)" } : undefined}
          >
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[0.58rem]"
              style={{ borderColor: selected ? "var(--studio-accent)" : "color-mix(in srgb, var(--ink) 16%, transparent)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="max-w-32 leading-tight text-ink/70 group-hover:text-[var(--studio-accent)]">{item.label}</span>
          </a>
        );
      })}
    </div>
  );

  return (
      <div className="fixed bottom-4 right-4 z-40">
        {open ? (
          <div className="studio-float mb-2 w-56 rounded-2xl p-3 backdrop-blur-xl">
            <p className="studio-label mb-2 px-2 !text-[0.58rem]">{label}</p>
            {links}
          </div>
        ) : null}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="studio-float ml-auto flex items-center gap-2 rounded-full px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink backdrop-blur-xl"
        >
          <span aria-hidden style={{ color: "var(--studio-accent)" }}>{open ? "×" : "≡"}</span>
          {label}
        </button>
      </div>
  );
}
