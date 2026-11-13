const lanes = [
  { label: "Search", note: "Rankings in motion" },
  { label: "Sites", note: "Pages shipping" },
  { label: "Platforms", note: "Builds in progress" },
];

export function PulseRail() {
  return (
    <div className="grid border-t border-white/10 sm:grid-cols-3" aria-hidden>
      {lanes.map((lane, index) => (
        <div key={lane.label} className="border-white/10 px-5 py-4 sm:border-l sm:first:border-l-0">
          <div className="flex items-center justify-between text-[11px] tracking-[0.16em]">
            <span className="text-[#2eb6ff]">{lane.label}</span>
            <span className="text-muted">{lane.note}</span>
          </div>
          <div className="mt-3 h-px overflow-hidden bg-white/10">
            <div className="rail-sweep h-full bg-[#2eb6ff]" style={{ animationDelay: `${index * 0.45}s` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
