import { SpaceTabStages, SpacesTabs } from "../../tabs/main";

import { DashboardContent } from "@/(cosmos)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.Now} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
