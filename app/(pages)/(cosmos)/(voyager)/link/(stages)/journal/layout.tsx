import { LinkTabStage, LinkTabs } from "@/(pages)/(cosmos)/(voyager)/link/tabs/main";

import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LinkTabs tab={LinkTabStage.Journal} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
