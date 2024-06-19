import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  ArchiveTabs,
  ArchiveTabStage,
} from '@/(core)/(dashboard)/archive/(tabs)/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ArchiveTabs
        tab={ArchiveTabStage.explorer}
        backUrl={archiveMap.archive.explorer.home.link}
      />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
