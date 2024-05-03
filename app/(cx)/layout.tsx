import { VerseBackground } from "@/(lib)/(app)/background/verses/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VerseBackground>
    {children}
  </VerseBackground>;
}
