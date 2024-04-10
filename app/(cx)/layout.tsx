import { VerseBackground } from '../(components)/(app)/background/verse/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VerseBackground>
    {children}
  </VerseBackground>;
}
