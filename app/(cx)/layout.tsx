import { CosmosBackground } from '../(components)/background/cosmos/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CosmosBackground>
    {children}
  </CosmosBackground>;
}
