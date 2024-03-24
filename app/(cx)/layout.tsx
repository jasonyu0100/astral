import { VersesBackground } from '../(components)/(app)/background/verses/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <VersesBackground>
    {children}
  </VersesBackground>;
}
