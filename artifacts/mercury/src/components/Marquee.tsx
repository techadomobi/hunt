export function ProviderMarquee() {
  const providers = [
    "Pragmatic Play", "NetEnt", "Play'n GO", "Microgaming", "Yggdrasil",
    "Hacksaw Gaming", "Push Gaming", "Nolimit City", "Relax Gaming",
    "Foxium", "Spinberry", "Triple Edge Studios", "ELK Studios",
    "Big Time Gaming", "Quickspin", "Red Tiger", "Thunderkick",
  ];
  const list = [...providers, ...providers];
  return (
    <div className="overflow-hidden bg-white border-y border-border py-6">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {list.map((p, i) => (
          <div
            key={i}
            className="font-display text-2xl font-black text-foreground/15 hover:text-mercury-red transition-colors uppercase tracking-tight"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
