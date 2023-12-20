import { DashboardController } from "@/(pages)/(dashboard)/(common)/controller/main";
import { DashboardSidebar } from "../(common)/sidebar/main";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardController>
      <DashboardSidebar />
      {children}
    </DashboardController>
  );
}

