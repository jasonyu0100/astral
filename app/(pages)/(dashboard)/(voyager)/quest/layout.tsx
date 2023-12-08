import { DashboardWrapper } from "@/(pages)/(dashboard)/(common)/wrapper/main";
import { DashboardBackground } from "@/(pages)/(dashboard)/(common)/background/main";
import { Sidebar } from "@/(pages)/(dashboard)/(common)/sidebar";

export default function QuestLayout({
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
