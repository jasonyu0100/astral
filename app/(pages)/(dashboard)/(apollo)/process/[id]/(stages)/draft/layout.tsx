import { DashboardContent } from "@/(pages)/(dashboard)/(common)/content/main";
import { DashboardBody } from "@/(pages)/(dashboard)/(common)/controller/body/main";
import { ProcessTabs } from "@/(pages)/(dashboard)/(apollo)/process/[id]/tabs/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardBody>
      <ProcessTabs tab={"Draft"} />
      <DashboardContent>{children}</DashboardContent>
    </DashboardBody>
  );
}
