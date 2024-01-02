import { WorksTabs } from "../../tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { WorkType } from "../../view";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={WorkType.Now} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
