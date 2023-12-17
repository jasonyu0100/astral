import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { DevSidebar } from "./common/sidebar/main";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function DevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DevSidebar />
      <DashboardBody>
        <DashboardBodyContent>{children}</DashboardBodyContent>
      </DashboardBody>
    </DashboardController>
  );
}
