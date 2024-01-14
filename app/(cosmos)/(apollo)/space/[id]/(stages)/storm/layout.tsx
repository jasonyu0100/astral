import { DashboardContent } from "@/(cosmos)/(common)/content/main";
import { DashboardBody } from "@/(cosmos)/(common)/controller/body/main";
import { SpaceTabStage, SpaceTabs } from "@/(cosmos)/(apollo)/space/[id]/tabs/main";

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
