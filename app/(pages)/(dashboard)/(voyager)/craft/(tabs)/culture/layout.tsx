import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { CraftTabs } from "@/(pages)/(dashboard)/(voyager)/common/tabs/3-craft-tabs/main";

export default function CraftStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CraftTabs tab={"Culture"} />
      <DashboardBodyContent>{children}</DashboardBodyContent>
    </>
  );
}
