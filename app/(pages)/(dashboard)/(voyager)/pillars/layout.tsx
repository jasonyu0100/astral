import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { VoyagerSidebar } from "../common/sidebar";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function VoyagerArtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <VoyagerSidebar />
      <DashboardBody>
        {children}
      </DashboardBody>
    </DashboardController>
  );
}
