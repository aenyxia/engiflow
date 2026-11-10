import { cn } from "@/lib/utils";

export function ProgressBar({ value, tone = "tide", className }: { value: number; tone?: "tide" | "mint" | "sun" | "ember"; className?: string }) {
  const bg = { tide: "bg-tide", mint: "bg-mint", sun: "bg-sun", ember: "bg-ember" }[tone];
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} className={cn("h-3 w-full overflow-hidden rounded-full bg-sky", className)}>
      <div className={cn("bar-fill h-full rounded-full", bg)} style={{ width: `${value}%` }} />
    </div>
  );
}

export function ProgressRing({ value, size = 132, stroke = 12, children }: { value: number; size?: number; stroke?: number; children?: React.ReactNode }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} className="stroke-sky" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} strokeLinecap="round" className="ring-fill stroke-tide"
          strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} style={{ ["--circ" as string]: c }} />
      </svg>
      <div className="absolute text-center">{children}</div>
    </div>
  );
}
