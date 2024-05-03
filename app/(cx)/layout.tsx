import { VerseBackground } from "@/(pkgs)/(app)/background/verses/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VerseBackground>
    {children}
  </VerseBackground>;
}
