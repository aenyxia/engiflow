import { cn } from "@/lib/utils";

// Mark: a speech bubble whose tail is a flowing wave: language (speech) + momentum (flow).
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("size-10", className)} aria-hidden>
      <defs><linearGradient id="ef" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#5b93ff" /><stop offset="1" stopColor="#1b4fd6" /></linearGradient></defs>
      <path d="M24 3C12.4 3 3 11.2 3 21.4c0 5.4 2.7 10.2 7 13.5-.3 3.2-1.6 5.6-3.6 7.6 4.4-.3 8-1.9 10.6-4.2 2.2.6 4.5.9 7 .9 11.6 0 21-8.2 21-18.4S35.600 3 24 3Z" fill="url(#ef)" />
      <path d="M12 22c3-5 6-5 9 0s6 5 9 0 4-4 6-2" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="37" cy="12.500" r="2.600" fill="#ffc531" />
    </svg>
  );
}
export const Wordmark = () => (
  <div className="flex items-center gap-2.5">
    <LogoMark />
    <div className="leading-none">
      <div className="font-display text-[22px] font-bold tracking-tight">Engi<span className="text-tide">Flow</span></div>
      <div className="mt-1 text-[11px] font-medium text-ink-soft">English, from A1 to C2</div>
    </div>
  </div>
);
