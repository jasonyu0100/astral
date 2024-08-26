import {
  VaultTabs,
  VaultTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { DashboardContent } from '@/ui/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <VaultTabs
        tab={VaultTabStage.Finder}
        backUrl={vaultMap.vault.explorer.home.link}
      />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
