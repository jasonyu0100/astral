import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../../(common)/sidebar/main";
import { DashboardBody } from "../../(common)/controller/body/main";

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DashboardSidebar indicator="Gallery"/>
      <DashboardBody>
        {children}
      </DashboardBody>
    </DashboardController>
  );
}
