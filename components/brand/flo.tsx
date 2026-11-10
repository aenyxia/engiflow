// Flo: EngiFlow's mascot, an original round speech-bubble character.
export function Flo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 190" className={className} style={{ animation: "bob 4s ease-in-out infinite" }} role="img" aria-label="Flo, the EngiFlow mascot">
      <ellipse cx="100" cy="178" rx="52" ry="8" fill="#12264a" opacity=".08" />
      <path d="M100 12c-48 0-84 33-84 76 0 22 10 41 27 54-1 13-6 23-14 31 19-1 33-8 44-17 9 3 18 4 27 4 48 0 84-33 84-76S148 12 100 12Z" fill="#2f6bff" />
      <path d="M100 12c-48 0-84 33-84 76 0 6 1 12 3 18 18-34 62-50 104-40 24 6 42 20 52 38 1-4 1-8 1-12 0-43-36-80-76-80Z" fill="#5b93ff" opacity=".55" />
      <ellipse cx="72" cy="86" rx="15" ry="19" fill="#fff" /><ellipse cx="128" cy="86" rx="15" ry="19" fill="#fff" />
      <circle cx="75" cy="89" r="8" fill="#12264a" /><circle cx="131" cy="89" r="8" fill="#12264a" />
      <circle cx="78" cy="85" r="2.800" fill="#fff" /><circle cx="134" cy="85" r="2.800" fill="#fff" />
      <path d="M82 116c10 12 26 12 36 0" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <circle cx="54" cy="108" r="8" fill="#ff9d86" opacity=".7" /><circle cx="146" cy="108" r="8" fill="#ff9d86" opacity=".7" />
      <path d="M96 14c0-8 4-12 12-12" fill="none" stroke="#ffc531" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
