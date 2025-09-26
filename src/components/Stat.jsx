export default function Stat({ value, label }) {
  return (
    <div className="group rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center transition hover:shadow-[0_0_0_2px_rgba(34,211,238,0.15)] transform hover:-translate-y-0.5">
      <p className="text-2xl md:text-3xl font-bold leading-none font-mono tabular-nums tracking-tight bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-1 text-sm md:text-base text-white/70">
        {label}
      </p>
    </div>
  );
}