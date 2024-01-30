import { LinkTabStage, LinkTabs } from '@/(cosmos)/(voyager)/journal/tabs/main';

import { DashboardContent } from '@/(cosmos)/(common)/content/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinkTabs tab={LinkTabStage.Journal} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
