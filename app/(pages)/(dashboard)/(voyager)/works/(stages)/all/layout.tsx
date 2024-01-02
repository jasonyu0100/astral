import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

import { WorksTabs } from "../../tabs/main";
import { WorkType } from "../../view";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WorksTabs tab={WorkType.All} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
