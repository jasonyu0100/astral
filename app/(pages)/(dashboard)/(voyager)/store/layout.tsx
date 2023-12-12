import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardBodyContent } from "@/(pages)/(dashboard)/(common)/controller/body/content/main";
import { VoyagerSidebar } from "../common/sidebar";
import { DashboardPlayer } from "../../(common)/controller/player/main";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function StoreLayout({
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
