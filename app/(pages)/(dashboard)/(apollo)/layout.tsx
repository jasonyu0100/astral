import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { VoyagerSidebar } from "../(voyager)/common/sidebar";

export default function DraftLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <VoyagerSidebar />
      {children}
    </DashboardController>
  );
}

