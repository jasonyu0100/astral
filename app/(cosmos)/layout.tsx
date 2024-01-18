import { CosmosBackground } from '../(common)/background/cosmos/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <CosmosBackground>{children}</CosmosBackground>;
}
