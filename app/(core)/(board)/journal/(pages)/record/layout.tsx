import { JournalTabStage, LinkTabs } from '@/(core)/(board)/journal/(tabs)/main';

import { DashboardContent } from '@/(components)/(core)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={JournalTabStage.Record} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
