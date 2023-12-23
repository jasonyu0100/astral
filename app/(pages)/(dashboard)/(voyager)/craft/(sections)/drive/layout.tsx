import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/craft/tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CraftTabs tab={"Drive"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
