export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="swiss-grid mb-12">
      <div className="col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-ink/50">
        {index}
      </div>
      <div className="col-span-11 md:col-span-11">
        <h2 className="display-3">{title}</h2>
      </div>
    </div>
  );
}
