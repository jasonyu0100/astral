import { DashboardContent } from "@/(pages)/(cosmos)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(cosmos)/(common)/controller/body/main";
import { ProcessTabStage, ProcessTabs } from "@/(pages)/(cosmos)/(apollo)/process/[id]/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <DashboardBody>
      <ProcessTabs tab={ProcessTabStage.Storm} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
