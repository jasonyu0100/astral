import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";

import { SpaceTabStages, SpacesTabs } from "../../tabs/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpacesTabs tab={SpaceTabStages.Then} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
