import { DashboardContent } from '@/(components)/(dashboard)/content/main';
import {
  ArchiveTabs,
  ArchiveTabStage,
} from '@/(core)/(dashboard)/vault/(tabs)/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ArchiveTabs tab={ArchiveTabStage.Finder} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
