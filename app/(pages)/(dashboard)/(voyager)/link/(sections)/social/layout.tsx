import { StoryTabs } from "@/(pages)/(dashboard)/(voyager)/link/tabs/main";

import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StoryTabs tab={"Social"} />
      <DashboardContent>{children}</DashboardContent>
    </>
  );
}
