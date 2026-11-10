import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "EngiFlow: English from A1 to C2", description: "A premium English-learning platform with AI conversation practice." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="antialiased">{children}</body></html>;
}
