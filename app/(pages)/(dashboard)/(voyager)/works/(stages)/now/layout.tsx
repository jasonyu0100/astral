import { WorkTabStages, WorksTabs } from "../../tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={WorkTabStages.Now} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
