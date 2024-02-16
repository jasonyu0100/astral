import { LinkTabStage, LinkTabs } from '@/(verses)/(voyager)/journal/(journal-tabs)/main';

import { DashboardContent } from '@/(verses)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={LinkTabStage.Feed} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
