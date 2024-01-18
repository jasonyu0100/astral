import { LinkTabStage, LinkTabs } from '@/(cosmos)/(voyager)/feed/tabs/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={LinkTabStage.Explore} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
