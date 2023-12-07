import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/dashboard/container/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/dashboard/background/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/dashboard/sidebar";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DashboardBackground>
        {children}
      </DashboardBackground>
    </DashboardWrapper>
  );
}
