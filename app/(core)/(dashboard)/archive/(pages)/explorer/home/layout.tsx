import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  ArchiveTabs,
  ArchiveTabStage,
} from '@/(core)/(dashboard)/archive/(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ArchiveTabs tab={ArchiveTabStage.explorer} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
