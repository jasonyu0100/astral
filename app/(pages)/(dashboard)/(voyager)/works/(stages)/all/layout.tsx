import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

import { WorkTabStages, WorksTabs } from "../../tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={WorkTabStages.All} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
