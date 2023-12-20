import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../../(common)/sidebar/main";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DashboardSidebar indicator="Works"/>
      <DashboardBody>
        {children}
      </DashboardBody>
    </DashboardController>
  );
}
