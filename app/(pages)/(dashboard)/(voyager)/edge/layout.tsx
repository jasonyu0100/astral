import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../../(common)/sidebar/main";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function ReleaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DashboardSidebar indicator="Record"/>
      <DashboardBody>
        {children}
      </DashboardBody>
    </DashboardController>
  );
}
