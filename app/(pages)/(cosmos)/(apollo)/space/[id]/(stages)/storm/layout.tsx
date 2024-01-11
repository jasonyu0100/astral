import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(cosmos)/(common)/controller/body/main";
import { SpaceTabStage, SpaceTabs } from "@/(pages)/(cosmos)/(apollo)/space/[id]/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <DashboardBody>
      <SpaceTabs tab={SpaceTabStage.Storm} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
