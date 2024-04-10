import { VerseBackground } from "@/(components)/(app)/background/verses/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VerseBackground>
    {children}
  </VerseBackground>;
}
