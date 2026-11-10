import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, interactive, ...p }: React.HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div className={cn("rounded-card border border-white/80 bg-foam/85 p-6 shadow-soft backdrop-blur",
      interactive && "cursor-pointer transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-lift", className)} {...p} />
  );
}
export const CardTitle = ({ className, ...p }: React.HTMLAttributes<HTMLHeadingElement>) =>
  <h3 className={cn("text-lg font-semibold text-ink", className)} {...p} />;
export const CardHint = ({ className, ...p }: React.HTMLAttributes<HTMLParagraphElement>) =>
  <p className={cn("text-sm text-ink-soft", className)} {...p} />;
