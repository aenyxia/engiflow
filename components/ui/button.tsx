import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Tactile "pressable" buttons: a solid ledge underneath that compresses on press.
const button = cva(
  "inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap select-none transition-all duration-150 active:translate-y-[3px] active:shadow-none disabled:opacity-50 disabled:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-tide text-white shadow-[0_4px_0_var(--color-tide-deep)] hover:bg-[#4079ff]",
        secondary: "bg-foam text-tide border border-line shadow-[0_4px_0_var(--color-line)] hover:bg-sky",
        success: "bg-mint text-white shadow-[0_4px_0_#168a66] hover:brightness-105",
        ghost: "text-ink-soft hover:bg-sky hover:text-ink active:translate-y-0",
      },
      size: { sm: "h-9 px-4 text-sm rounded-full", md: "h-11 px-6 text-[15px] rounded-full", lg: "h-14 px-8 text-base rounded-2xl" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild, ...p }, ref) => {
  const C = asChild ? Slot : "button";
  return <C ref={ref} className={cn(button({ variant, size }), className)} {...p} />;
});
Button.displayName = "Button";
