import { JournalTabStage, LinkTabs } from '@/(cx)/(studio)/journal/(journal-tabs)/main';

import { DashboardContent } from '@/(components)/(cx)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={JournalTabStage.Updates} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
