import { JournalTabStage, LinkTabs } from '@/(core)/(dashboard)/journal/(tabs)/main';

import { DashboardContent } from '@/(components)/(dashboard)/content/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={JournalTabStage.Record} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
