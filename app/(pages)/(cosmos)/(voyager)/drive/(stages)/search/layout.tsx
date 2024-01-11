import { CraftTabStage, CraftTabs } from "@/(pages)/(cosmos)/(voyager)/drive/tabs/main";

import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={CraftTabStage.Search} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
