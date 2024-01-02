import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

import { WorksTabs } from "../../tabs/main";

export function WorksThenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WorksTabs tab={"Then"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
