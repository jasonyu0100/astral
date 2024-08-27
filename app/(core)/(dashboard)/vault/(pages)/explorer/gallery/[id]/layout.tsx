import { DashboardContent } from '@/(core)/(dashboard)/common/content/main';
import {
  VaultTabs,
  VaultTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';

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
