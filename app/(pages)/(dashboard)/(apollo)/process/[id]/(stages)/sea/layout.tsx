import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { ProcessTabs } from "@/(pages)/(dashboard)/(apollo)/process/[id]/tabs/main";
import { ProcessTabStage } from "../../layout";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardBody>
      <ProcessTabs tab={ProcessTabStage.Sea} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
