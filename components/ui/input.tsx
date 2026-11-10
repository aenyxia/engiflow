import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement> & { icon?: React.ReactNode }>(
  ({ className, icon, ...p }, ref) => (
    <label className="relative block">
      {icon && <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft [&_svg]:size-[18px]">{icon}</span>}
      <input ref={ref} className={cn("h-12 w-full rounded-2xl border border-line bg-foam px-4 text-[15px] text-ink placeholder:text-ink-soft/70 shadow-[inset_0_2px_0_rgb(47_107_255/.04)] transition-colors hover:border-tide/40 focus:border-tide focus:outline-none focus:ring-4 focus:ring-tide/15", icon && "pl-11", className)} {...p} />
    </label>
  )
);
Input.displayName = "Input";
