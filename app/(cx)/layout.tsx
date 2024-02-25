import { CosmosBackground } from '../(components)/(app)/background/cosmos/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CosmosBackground>
    {children}
  </CosmosBackground>;
}
