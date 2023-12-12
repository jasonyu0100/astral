import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { VoyagerSidebar } from "../common/sidebar";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function VoyagerGalleryLayout({
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
