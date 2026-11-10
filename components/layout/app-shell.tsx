"use client";
import { useState } from "react";
import { Home, BookOpen, Sparkles, Swords, BarChart3, Library, Search, Flame, Gem, Crown } from "lucide-react";
import { Wordmark, LogoMark } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", icon: Home }, { label: "Learn", icon: BookOpen }, { label: "Speak with Flo", icon: Sparkles },
  { label: "Challenges", icon: Swords }, { label: "Progress", icon: BarChart3 }, { label: "Library", icon: Library },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("Home");
  return (
    <div className="min-h-screen lg:pl-72">
      <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col gap-8 border-r border-line bg-foam/70 p-6 backdrop-blur-xl lg:flex">
        <Wordmark />
        <nav aria-label="Main" className="flex flex-col gap-1.5">
          {nav.map(({ label, icon: I }) => (
            <button key={label} onClick={() => setActive(label)} aria-current={active === label ? "page" : undefined}
              className={cn("flex h-12 items-center gap-3 rounded-2xl px-4 text-[15px] font-medium text-ink-soft transition-colors hover:bg-sky hover:text-ink",
                active === label && "bg-sky font-semibold text-tide")}>
              <I className="size-5" /> {label}
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-3xl bg-gradient-to-br from-tide to-tide-deep p-5 text-white shadow-lift">
          <Crown className="mb-3 size-6 text-sun" />
          <p className="font-display text-lg font-semibold leading-snug">Reach C2 faster with EngiFlow Plus</p>
          <p className="mt-1 text-sm text-white/75">Unlimited AI conversation practice.</p>
          <Button variant="secondary" size="sm" className="mt-4 w-full">See Plus</Button>
        </div>
      </aside>

      <div className="mx-auto max-w-6xl px-4 pb-28 pt-5 sm:px-8 lg:pb-12">
        <header className="mb-8 flex items-center gap-3">
          <LogoMark className="size-9 lg:hidden" />
          <div className="max-w-md flex-1"><Input icon={<Search />} placeholder="Search lessons, words, topics" aria-label="Search" /></div>
          <div className="ml-auto flex items-center gap-2">
            <Chip icon={<Flame className="size-4 text-ember" />} label="12" />
            <Chip icon={<Gem className="size-4 text-tide" />} label="750" />
          </div>
        </header>
        {children}
      </div>

      <nav aria-label="Main" className="fixed inset-x-3 bottom-3 z-20 flex justify-around rounded-3xl border border-line bg-foam/90 p-2 shadow-lift backdrop-blur-xl lg:hidden">
        {nav.filter((_, i) => i !== 3).map(({ label, icon: I }) => (
          <button key={label} onClick={() => setActive(label)} aria-label={label}
            className={cn("grid size-12 place-items-center rounded-2xl text-ink-soft transition-colors", active === label && "bg-sky text-tide")}>
            <I className="size-5" />
          </button>
        ))}
      </nav>
    </div>
  );
}
const Chip = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line bg-foam px-3.5 text-sm font-bold shadow-soft">{icon}{label}</span>
);
