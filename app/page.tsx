import { ArrowRight, Play, Mic, Headphones, BookText, PenLine, Check, Flame } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Flo } from "@/components/brand/flo";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHint } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ProgressBar, ProgressRing } from "@/components/ui/progress";

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"], current = 2;
const palette = [["Ink", "#12264a"], ["Tide", "#2f6bff"], ["Sky", "#e6f0ff"], ["Mist", "#f4f8ff"], ["Ember", "#ff7a59"], ["Sun", "#ffc531"], ["Mint", "#22b788"]];
const skills = [["Listening", Headphones, "bg-sky text-tide", 12], ["Speaking", Mic, "bg-[#ffe9e3] text-ember", 10], ["Vocabulary", BookText, "bg-[#dcf5ec] text-mint", 24], ["Writing", PenLine, "bg-[#fff3cf] text-[#b88700]", 18]] as const;
const rise = (d: number) => ({ animationDelay: `${d}ms` });

export default function Home() {
  return (
    <AppShell>
      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <Card className="relative overflow-hidden bg-gradient-to-br from-[#dbe9ff] to-[#f1f7ff] p-8 sm:p-10 animate-rise">
            <div className="relative z-10 max-w-md">
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl">Good morning, Alex.</h1>
              <p className="mt-3 text-lg text-ink-soft">You&apos;re 40% of the way through B1. One more lesson keeps your streak alive.</p>
              <Button size="lg" className="mt-6">Continue lesson <ArrowRight /></Button>
            </div>
            <Flo className="absolute -right-2 bottom-0 hidden h-60 sm:block" />
          </Card>

          <Card className="animate-rise" style={rise(80)}>
            <div className="mb-5 flex items-baseline justify-between"><CardTitle>Your path to C2</CardTitle><CardHint>Level B1 · Intermediate</CardHint></div>
            <ol className="flex items-center">
              {levels.map((l, i) => (
                <li key={l} className="flex flex-1 items-center last:flex-none">
                  <span className={`grid size-12 place-items-center rounded-full font-display text-sm font-bold ${i < current ? "bg-mint text-white" : i === current ? "bg-tide text-white shadow-[0_0_0_6px_rgb(47_107_255/.15)]" : "bg-sky text-ink-soft"}`}>
                    {i < current ? <Check className="size-5" /> : l}
                  </span>
                  {i < levels.length - 1 && <span className={`mx-1 h-1 flex-1 rounded-full ${i < current ? "bg-mint" : "bg-sky"}`} />}
                </li>
              ))}
            </ol>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 animate-rise" style={rise(160)}>
            {skills.map(([n, I, tone, c]) => (
              <Card key={n} interactive className="p-5">
                <span className={`mb-4 grid size-11 place-items-center rounded-2xl ${tone}`}><I className="size-5" /></span>
                <p className="font-semibold">{n}</p><CardHint>{c} lessons</CardHint>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <Card className="animate-rise" style={rise(120)}>
            <CardTitle>Daily goal</CardTitle>
            <div className="my-5 flex justify-center">
              <ProgressRing value={75}><Flame className="mx-auto size-5 text-ember" /><p className="font-display text-2xl font-bold">15<span className="text-base text-ink-soft"> / 20</span></p><p className="text-xs text-ink-soft">minutes</p></ProgressRing>
            </div>
            <CardHint className="text-center">5 minutes to extend your 12-day streak.</CardHint>
          </Card>
          <Card className="animate-rise" style={rise(200)}>
            <CardTitle>Travel Basics</CardTitle><CardHint>Unit 2 · Lesson 3</CardHint>
            <ProgressBar value={60} className="my-4" />
            <Button variant="secondary" className="w-full"><Play /> Start</Button>
          </Card>
        </div>
      </div>

      <section className="mt-14" aria-labelledby="ds">
        <h2 id="ds" className="text-3xl font-bold">Design system</h2>
        <p className="mt-1 text-ink-soft">The tokens and components every EngiFlow screen is built from.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card><CardTitle>Colour</CardTitle>
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-7 lg:grid-cols-4">
              {palette.map(([n, h]) => <div key={n}><div className="h-14 rounded-2xl border border-line" style={{ background: h }} /><p className="mt-1.5 text-sm font-semibold">{n}</p><p className="text-xs text-ink-soft">{h}</p></div>)}
            </div></Card>
          <Card><CardTitle>Type</CardTitle>
            <p className="mt-4 font-display text-4xl font-bold leading-tight">Bricolage Grotesque</p><CardHint>Display: headlines, numbers, levels</CardHint>
            <p className="mt-4 text-xl font-semibold">Figtree</p><CardHint>Body: lessons, interface, long reading</CardHint></Card>
          <Card><CardTitle>Buttons</CardTitle>
            <div className="mt-4 flex flex-wrap gap-3"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="success">Correct</Button><Button variant="ghost">Ghost</Button><Button disabled>Disabled</Button></div>
            <CardHint className="mt-3">Press any button: it sits on a ledge and sinks when pressed.</CardHint></Card>
          <Card><CardTitle>Inputs</CardTitle>
            <div className="mt-4 space-y-3"><Input placeholder="Type your answer in English" /><Input icon={<Mic />} placeholder="Or say it out loud" /></div></Card>
        </div>
      </section>
    </AppShell>
  );
}
