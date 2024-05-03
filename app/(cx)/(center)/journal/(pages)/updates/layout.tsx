import { JournalTabStage, LinkTabs } from '@/(cx)/(center)/journal/(journal-tabs)/main';

import { DashboardContent } from '@/(pkgs)/(core)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={JournalTabStage.Updates} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
