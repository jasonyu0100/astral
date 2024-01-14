import { DashboardController } from "@/(cosmos)/(common)/controller/main";
import { DashboardBody } from "@/(cosmos)/(common)/controller/body/main";
import { DashboardSidebar, SidebarIndicatorType } from "../../(common)/sidebar/main";



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <DashboardController>
      <DashboardSidebar indicator={SidebarIndicatorType.Drive} />
      <DashboardBody>{children}</DashboardBody>
    </DashboardController>
  );
}
