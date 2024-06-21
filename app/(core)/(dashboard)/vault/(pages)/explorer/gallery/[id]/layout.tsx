import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  ArchiveTabs,
  ArchiveTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';
import { vaultMap } from '@/(core)/(dashboard)/vault/map';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ArchiveTabs
        tab={ArchiveTabStage.Finder}
        backUrl={vaultMap.vault.explorer.home.link}
      />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
