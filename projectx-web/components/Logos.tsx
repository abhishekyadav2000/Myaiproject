export default function Logos() {
  const logos = ["UNT", "CBSE", "Makerspace", "STREAMS+", "AI Lab"];
  return (
    <div className="flex flex-wrap items-center gap-6 opacity-70">
      {logos.map((l) => (
        <div key={l} className="rounded-lg border border-white/10 px-4 py-2 text-sm">{l}</div>
      ))}
    </div>
  );
}
